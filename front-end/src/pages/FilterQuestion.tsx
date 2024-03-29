

import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { config } from '../Constant';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import { useAPI } from '../services/Api';

// FIXME adicionar um botão de "search" pra mostrar só as certificadas/não certificadas
// FIXME ajustar para celular, tá esquisito

interface ListQuestion {
    idQuestion: number;
    question: string[];
    difficulty: number;
    answers: string[];
    idDiscipline: number;
    idSubject: number;
    certified: boolean;
}

const initialListQuestion: ListQuestion = {
    idQuestion: 0,
    question: [],
    difficulty: 0,
    answers: [],
    idDiscipline: 0,
    idSubject: 0,
    certified: false,
};

interface Test {
    idTest: number;
}

interface ListDiscipline {
    idDiscipline: number;
    name: string;
    descrption_discipline: string;
}

interface ListSubject {
    idSubject: number;
    description: string;
    amountAccess: 0;
    idDiscipline: number;
}

interface StudentAnswer {
    [questionId: string]: string[];
}

interface StudentAnswers {
    idStudent: number | undefined;
    answersHash: StudentAnswer;
}

interface Answer {
    idAnswer: number;
    answer: string;
}

const initialAnswers: StudentAnswers = {
    idStudent: 0,
    answersHash: {}
};

function allQuestionsAnswered(questions: ListQuestion[], answers: StudentAnswer): boolean {
    const answeredIds = Object.keys(answers);
    const allIds = questions.map((q) => q.idQuestion.toString());
  
    return answeredIds.length === allIds.length && answeredIds.every((id) => allIds.includes(id));
}


const FiltroDisciplinas = () => {
    const [stateDiscipline, setStateDiscipline] = useState('');
    const [stateSubject, setStateSubject] = useState('');
    const [stateNameDiscipline, setStateNameDiscipline] = useState<ListDiscipline[]>([]);
    const [stateNameSubject, setStateNameSubject] = useState<ListSubject[]>([]);
    const [listQuestions, setListQuestions] = useState<ListQuestion[]>([]);
    const [test, setTest] = useState<Test[]>([]);
    const [showButton, setShowButton] = useState(false);
    const auth = useContext(AuthContext);
    const api = useAPI()
    const [studentAnswers, setStudentAnswers] = useState<StudentAnswers>({
        idStudent: 0,
        answersHash: {},
    });

    const Test = () => {

        if (!parseInt(stateDiscipline) || !parseInt(stateSubject)) {
            alert("Selecione a Disciplina e o Assunto")
            return;
        }
        const dataRB = {
            "idDiscipline": parseInt(stateDiscipline),
            "idSubject": parseInt(stateSubject),
            "numberOfQuestions": Math.random() * (10 - 3) + 3,
        }


        api.post(`/tests`, dataRB,).then((res) => {
            setListQuestions(res.data.questions)
            setTest(res.data.idTest)
        }).then(() => setShowButton(true));
    }

    useEffect(() => {
        if (stateNameSubject.length === 0) {
            setShowButton(false);
            try {
                axios.get(`${config.url.BASE_URL}/subjects`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: auth.user?.basicAuth,
                        Accept: 'application/json',
                    }
                }).then(response => setStateNameSubject(response.data))

            } catch (error) {
                console.error(error)
            }
        }
    }, [auth.user?.basicAuth, stateNameSubject]);

    useEffect(() => {
        if (stateNameDiscipline.length === 0) {
            try {
                axios.get(`${config.url.BASE_URL}/disciplines`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: auth.user?.basicAuth,
                        Accept: 'application/json',
                    }
                }).then(response => setStateNameDiscipline(response.data))
            } catch (error) {
                console.error(error);
            }
        }
    }, [auth.user?.basicAuth, stateNameDiscipline]);

    // FIXME tratar caso não seja selecionado nada
    const correctTest = () => {

        if (!allQuestionsAnswered(listQuestions, studentAnswers.answersHash)) {
            alert('Responda todas as questões antes de enviar!');
            return;
        }
        try {
            axios.put(`${config.url.BASE_URL}/tests/${test}`, studentAnswers, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: auth.user?.basicAuth,
                    Accept: 'application/json',
                }
            }).then(response => setStudentAnswers(initialAnswers))
              .then(( () => setShowButton(false)))
              alert("Prova respondida. Consulte sua performance!")
        } catch (error) {
            console.error(error);
        }
    };

    // FIXME warning de key em algum lugar
    // FIXME Não está tratando questões que sejam múltipla escolha
    return (
        <div className="container">
            <select className="form-select"
                value={stateDiscipline}
                onChange={(e) => { setStateDiscipline(e.target.value) }} >
                <option selected>Disciplina</option>
                {stateNameDiscipline.map((op, index) => (
                    <option key={index} value={op.idDiscipline}>
                        {op.name}
                    </option>
                ))}
            </select>
            <select className="form-select"
                value={stateSubject}
                onChange={(e) => { setStateSubject(e.target.value) }}
            >
                <option selected>Assunto</option>
                {stateNameSubject.map((op, index) => (
                    <option key={index} value={op.idSubject}>
                        {op.description}
                    </option>
                ))}
            </select>

            <button className="btn btn-primary btn-sm mt-1" onClick={Test}>Gerar prova</button>
            <div className="row text-center">
                <p className="h2">Questões</p>
            </div>
            {listQuestions.map((question, index) => (
                <>
                    <div className="row" key={question.idQuestion}>
                        <div className="col-sm-auto">
                            <p className="h4">{`${index + 1}. ${question.question}`}</p>
                        </div>
                        <div className="col-sm-auto">                             </div>
                        <div className="row-sm-6">
                            {question.answers.map((answer, index) => (
                                <div className="row mb-3 mx-4" key={index}>
                                    <div className="col-sm-auto">
                                        <label>{`${String.fromCharCode(65 + index)}`}</label>
                                    </div>
                                    <div className="col-sm-auto">
                                        <input
                                            type="radio"
                                            name={`question-${question.idQuestion}`}
                                            required
                                            value={(index + 1).toString()}
                                            checked={
                                                studentAnswers.answersHash[question.idQuestion] &&
                                                studentAnswers.answersHash[question.idQuestion].includes(
                                                    (index + 1).toString()
                                                )
                                            }
                                            onChange={(event) => {
                                                const answerHash: StudentAnswer = {};
                                                answerHash[question.idQuestion] = [
                                                    event.target.value,
                                                ];
                                                const updatedStudentAnswers: StudentAnswers = {
                                                    idStudent: auth.user?.id_client!,
                                                    answersHash: {
                                                        ...studentAnswers.answersHash,
                                                        ...answerHash,
                                                    },
                                                };
                                                setStudentAnswers(updatedStudentAnswers);
                                            }}
                                        />
                                    </div>
                                    <div className="col-sm-auto">
                                        <label>{`${answer}`}</label>
                                    </div>
                                </div>
                            ))}
                            <hr />
                        </div>
                    </div>
                </>
            ))}

            {showButton && <button  className="btn btn-primary btn-sm" onClick={correctTest}>Enviar para correção</button>}

            <Outlet />
        </div>
    );
};

export default FiltroDisciplinas;

