INSERT INTO ROLE_MODEL(ROLE) VALUES ('ROLE_TEACHER');
INSERT INTO ROLE_MODEL(ROLE) VALUES ('ROLE_STUDENT');
INSERT INTO ROLE_MODEL(ROLE) VALUES ('ROLE_CERTIFIER');
INSERT INTO ROLE_MODEL(ROLE) VALUES ('ROLE_ADMIN');


INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('RenanE','renane','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO STUDENT_MODEL(CPF, EMAIL, NAME, id_client) VALUES ('07983136927', '123@GMAIL.COM', 'Renan', 1);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (1, 2);

INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('Giovanie','giovanie','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO STUDENT_MODEL(CPF, EMAIL, NAME, id_client) VALUES ('07983136928', '789@GMAIL.COM', 'GIOVANNI', 2);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (2, 2);

INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('Algueme','algueme','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO STUDENT_MODEL(CPF, EMAIL, NAME, id_client) VALUES ('07983136929', '456@GMAIL.COM', 'Alguem', 3);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (3, 2);

INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO', 'ARQUIVO.PDF', '1',7);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO1', '23.PDF', '2',5);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO2', 'APOSTILA.PDF', '2',0);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO3', 'ARQUIVO.PDF', '1',3);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO4', '23.PDF', '3',4);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO5', 'APOSTILA.PDF', '4',0);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO6', 'ARQUIVO.PDF', '3',0);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO7', '23.PDF', '2',10);
INSERT INTO MATERIAL_MODEL(CONTENT, FILE_NAME, ID_CLIENT, AMOUNT_ACCESS) VALUES ('CONTEUDO8', 'APOSTILA.PDF', '2',30);

INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('Renan','renan','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO TEACHER_MODEL(DTYPE, CPF, EMAIL, ID_DISCIPLINE, NAME, CERTIFIER, ID_CLIENT) VALUES ('COISA', '079.831.369-27', 'EMAIL@GMAIL.COM', 509071355, 'Renan', 0, 4);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (4, 1);

INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('Giovani','giovani','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO TEACHER_MODEL(DTYPE, CPF, EMAIL, ID_DISCIPLINE, NAME, CERTIFIER, ID_CLIENT) VALUES ('COISA', '079.831.369-27', 'EMAIL1@GMAIL.COM', 509071352, 'Pedro', 0, 5);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (5, 1);

INSERT INTO CLIENT_MODEL(NAME, LOGIN, PASSWORD) VALUES ('admin','admin','$2a$10$224Y56.QHRu.7XDU9CwlG.ZMfVWUWm0YBvslnF.hdmsKXTJlgb/YK');
INSERT INTO TEACHER_MODEL(DTYPE, CPF, EMAIL, ID_DISCIPLINE, NAME, CERTIFIER, ID_CLIENT) VALUES ('COISA', '079.831.88822', 'EMAIL123@GMAIL.COM', 509071351, 'Lara',0, 6);
INSERT INTO CLIENT_ROLE(id_client, ROLE_ID) VALUES (6, 4);

INSERT INTO DISCIPLINE_MODEL (DESCRPTION_DISCIPLINE, NAME_DISCIPLINE) VALUES ('oi', 'Prog tbm');
INSERT INTO DISCIPLINE_MODEL (DESCRPTION_DISCIPLINE, NAME_DISCIPLINE) VALUES ('oi2', 'Prog tbm2');
INSERT INTO DISCIPLINE_MODEL (DESCRPTION_DISCIPLINE, NAME_DISCIPLINE) VALUES ('oi2', 'Prog tbm3');


INSERT INTO TEST_MODEL (NAME, ANSWERS, DATE_TIME) VALUES ('Prova de sip', '{"1":"C","2":"A","3":"D"}', TO_DATE('2023-04-11', 'yyyy-mm-dd'));
INSERT INTO TEST_MODEL (NAME, ANSWERS, DATE_TIME) VALUES ('Prova de The Winter', '{"1":"D","2":"E","3":"C"}',TO_DATE('2023-05-17', 'yyyy-mm-dd'));
INSERT INTO TEST_MODEL (NAME, ANSWERS, DATE_TIME) VALUES ('Prova de Sum', '{"1":"C","2":"A","3":"B"}', TO_DATE('2023-06-15', 'yyyy-mm-dd'));

INSERT INTO QUESTION_MODEL (QUESTION, ANSWERS, DIFFICULTY, CERTIFIED, ID_DISCIPLINE, ID_SUBJECT, AMOUNT_ACCESS, UPDATE_DATE) VALUES ('Porque o código funciona', 'Não sei o motivo exato, mas sei que o stackoverflow sabe', 1, 0, 1, 1, 0, TO_DATE('2023-04-11', 'yyyy-mm-dd'))
INSERT INTO QUESTION_MODEL (QUESTION, ANSWERS, DIFFICULTY, CERTIFIED, ID_DISCIPLINE, ID_SUBJECT, AMOUNT_ACCESS, UPDATE_DATE) VALUES ('Porque o código nunca funciona', 'Não sei o motivo exato, mas sei que o stackoverflow sabe', 2, 0, 3, 2,0,TO_DATE('2023-04-11', 'yyyy-mm-dd'))
INSERT INTO QUESTION_MODEL (QUESTION, ANSWERS, DIFFICULTY, CERTIFIED, ID_DISCIPLINE, ID_SUBJECT, AMOUNT_ACCESS, UPDATE_DATE) VALUES ('Porque eu não sei', 'Não sei o motivo exato, mas sei que o stackoverflow sabe', 4, 0, 2, 3,10,TO_DATE('2023-04-11', 'yyyy-mm-dd'))

INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Algas', 0, 2);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Rochas',10, 1);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Magma', 5, 3);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Algas', 15, 2);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Rochas', 30, 1);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Magma', 5, 3);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Algas', 40, 2);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Rochas', 47, 1);
INSERT INTO SUBJECT_MODEL (DESCRIPTION, AMOUNT_ACCESS, ID_DISCIPLINE) VALUES ('Magma', 5, 3);

insert into test_has_question values (1,1)
insert into test_has_question values (1,2)
insert into test_has_question values (1,3)

insert into student_has_test values (1,1,8.5)
insert into student_has_test values (1,2,8.0)
insert into student_has_test values (2,2,5.0)
insert into student_has_test values (3,1,4.5)

insert into material_has_student values (1,1)
insert into material_has_student values (1,2)
insert into material_has_student values (2,3)
insert into material_has_student values (3,1)

insert into teacher_has_question values (1,1)
insert into teacher_has_question values (1,2)
insert into teacher_has_question values (2,3)
insert into teacher_has_question values (3,1)






