package com.calarcasi.honos.entities.comiteConciliacion;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.calarcasi.honos.entities.generales.Apoderado;

/**
 * Entity implementation class for Entity: ComiteConciliacion
 *
 */
@Entity
@Table(name="COMITE_CONCILIACION")
public class ComiteConciliacion  implements Serializable {

	public final static String TodosLosComites = "ComiteConciliacion.getTodosLosComites";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="FECHA_HORA")
	private Date fechaHora;	
	
	private String tipo;
	
	@Column(name="MOTIVO_CANCELACION")
	private String motivoCancelacion;
	
	private String estado;
	
	@OneToMany(cascade=CascadeType.PERSIST, orphanRemoval = true)
	@JoinColumn(name="COMITE_ID") 	
	private List<AsistenteComite> asistentes;
	
//	@OneToMany
//	@JoinColumn(name="NUMERO_COMITE")	
//	private List<FichaTecnica> fichasTecnicas;
	
	@ManyToMany
	@JoinTable(name="APODERADOS_COMITE_EXTRAORDINARIO",
	joinColumns=@JoinColumn(name="COMITE_ID"),
	inverseJoinColumns=@JoinColumn(name="APODERADO_ID"))
	private List<Apoderado> apoderadosExtraordinario;
	
	@Column(name="PROPOSICIONES")
	private String proposiciones;
	
	@Column(name="HORA_FINAL")
	private String horaFinal;
	
	private static final long serialVersionUID = 1L;

	public ComiteConciliacion() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFechaHora() {
		return fechaHora;
	}

	public void setFechaHora(Date fechaHora) {
		this.fechaHora = fechaHora;
	}

		
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getMotivoCancelacion() {
		return motivoCancelacion;
	}

	public void setMotivoCancelacion(String motivoCancelacion) {
		this.motivoCancelacion = motivoCancelacion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public List<AsistenteComite> getAsistentes() {
		return asistentes;
	}

	public void setAsistentes(List<AsistenteComite> asistentes) {
		this.asistentes = asistentes;
	}

//	public List<FichaTecnica> getFichasTecnicas() {
//		return fichasTecnicas;
//	}
//
//	public void setFichasTecnicas(List<FichaTecnica> fichasTecnicas) {
//		this.fichasTecnicas = fichasTecnicas;
//	}
	
	public List<Apoderado> getApoderadosExtraordinario() {
		return apoderadosExtraordinario;
	}

	public void setApoderadosExtraordinario(List<Apoderado> apoderadosExtraordinario) {
		this.apoderadosExtraordinario = apoderadosExtraordinario;
	}

	
	public String getProposiciones() {
		return proposiciones;
	}

	public void setProposiciones(String proposiciones) {
		this.proposiciones = proposiciones;
	}

	public String getHoraFinal() {
		return horaFinal;
	}

	public void setHoraFinal(String horaFinal) {
		this.horaFinal = horaFinal;
	}

	@Override
	public String toString() {
		return "ComiteConciliacion [id=" + id + ", fechaHora=" + fechaHora + ", horaFinal=" + horaFinal + ", proposiciones=" + proposiciones 
				+ ", tipo=" + tipo + ", motivoCancelacion=" + motivoCancelacion + ", estado=" + estado + ", asistentes="
				+ asistentes + "]";
	}
	
	public void SetProposiciones(ComiteConciliacion des)
	{
		this.setHoraFinal(des.getHoraFinal());
		this.setProposiciones(des.getProposiciones());
	}
	
}
