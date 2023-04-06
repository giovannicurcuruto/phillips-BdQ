package com.phillips.saper.bancoquestoes.dtos;

import java.util.List;

public class QuestionRequestDTO {
    //TODO Adicionar  @Schema(example = "") nos atributos e validações
    private String question;
    private List<String> answers;
    private int difficulty;    
    private int idDiscipline;
    private int idSubject;
    private List<String> answersSheet;

    public QuestionRequestDTO() {
    }

    public QuestionRequestDTO(String question, List<String> answers, int difficulty,
            int amountAccess, int idDiscipline, int idSubject, List<String> answersSheet) {
        this.question = question;
        this.answers = answers;
        this.difficulty = difficulty;
        this.idDiscipline = idDiscipline;
        this.idSubject = idSubject;
        this.answersSheet = answersSheet;
    }

    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    public List<String> getAnswers() {
        return answers;
    }
    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
    public int getDifficulty() {
        return difficulty;
    }
    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }
    public int getIdDiscipline() {
        return idDiscipline;
    }
    public void setIdDiscipline(int idDiscipline) {
        this.idDiscipline = idDiscipline;
    }
    public int getIdSubject() {
        return idSubject;
    }
    public void setIdSubject(int idSubject) {
        this.idSubject = idSubject;
    }

    public List<String> getAnswersSheet() {
        return answersSheet;
    }

    public void setAnswersSheet(List<String> answersSheet) {
        this.answersSheet = answersSheet;
    } 

    
}
