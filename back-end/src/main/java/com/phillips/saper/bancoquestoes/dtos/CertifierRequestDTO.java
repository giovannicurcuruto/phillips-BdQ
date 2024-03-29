package com.phillips.saper.bancoquestoes.dtos;

import org.hibernate.validator.constraints.br.CPF;

import com.phillips.saper.bancoquestoes.models.CertifierModel;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CertifierRequestDTO {

    @Size(min = 3, max = 55, message = "Nome tem tamanho mínimo de 3 e máximo de 55")
    @Schema(example = "User")
    @NotBlank(message = "O campo nome é obrigatório")
    String name;

    @CPF
    @Schema(example = "123.456.789-09")
    @NotBlank(message = "O campo cpf é obrigatório")
    String cpf;

    @Email(message = "Informe um email válido")
    @NotBlank(message = "Login é obrigatório")
    @Email(message = "Informe um email válido")
    String login;

    @Size(min = 8, max = 55, message = "Password tem tamanho mínimo de 8 e máximo de 55")
    @NotBlank(message = "confirmação de senha obrigatória")
    String password;

    @Size(min = 8, max = 55, message = "Password tem tamanho mínimo de 8 e máximo de 55")
    @NotBlank(message = "confirmação de senha obrigatória")
    String repeated_password;

    Long idDiscipline;
    
    public CertifierRequestDTO(String name, String cpf, String login, String password, String repeated_password,
            Long idDiscipline) {
        this.name = name;
        this.cpf = cpf;
        this.login = login;
        this.password = password;
        this.repeated_password = repeated_password;
        this.idDiscipline = idDiscipline;
    }

    public CertifierRequestDTO(CertifierModel certifierModel){
        this.cpf = certifierModel.getCpf();
        this.name = certifierModel.getName();
        this.idDiscipline = certifierModel.getIdDiscipline();
        this.idDiscipline = certifierModel.getIdDiscipline();
    }

    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getRepeated_password() {
        return repeated_password;
    }
    public void setRepeated_password(String repeated_password) {
        this.repeated_password = repeated_password;
    }
    public Long getIdDiscipline() {
        return idDiscipline;
    }
    public void setIdDiscipline(Long idDiscipline) {
        this.idDiscipline = idDiscipline;
    }


}
