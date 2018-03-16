package com.calarcasi.honos.entities.comiteConciliacion.fichaTecnica;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "FICHA_TECNICA")
public class FichaTecnica implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// INFORMACION GENERAL

	@Column(name = "FECHA_COMITE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaComite;

	@Column(name = "NUMERO_COMITE")
	private Long numeroComite;
	
	@Column(name = "COMITE_ID")
	private Long comite;
	

	@Column(name = "NUMERO_FICHA")
	private Long numeroFicha;

	@Column(name = "FECHA_POSTULACIÓN")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaPostulacion;

	@Column(name = "CLASE_CONCILIACION")
	private String claseConciliacion;

	@Column(name = "APODERADO_NOMBRE")
	private String apoderadoNombre;

	@Column(name = "APODERADO_DOCUMENTO")
	private String apoderadoDocumento;

	@Column(name = "APODERADO_TARJETA")
	private String apoderadoTarjeta;

	@Column(name = "FECHA_RECHAZO")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaRechazo;

	@Column(name = "RAZON_RECHAZO")
	private String razonRechazo;

	private String intervencion;

	private String resultado;

	private String razon;

	private String estado;

	public FichaTecnica() {
		super();
	}

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getFechaComite() {
		return fechaComite;
	}

	public void setFechaComite(Date fechaComite) {
		this.fechaComite = fechaComite;
	}

	public Long getNumeroComite() {
		return numeroComite;
	}

	public void setNumeroComite(Long numeroComite) {
		this.numeroComite = numeroComite;
	}

	public Long getNumeroFicha() {
		return numeroFicha;
	}

	public void setNumeroFicha(Long numeroFicha) {
		this.numeroFicha = numeroFicha;
	}

	public Date getFechaPostulacion() {
		return fechaPostulacion;
	}

	public void setFechaPostulacion(Date fechaPostulacion) {
		this.fechaPostulacion = fechaPostulacion;
	}

	public String getClaseConciliacion() {
		return claseConciliacion;
	}

	public void setClaseConciliacion(String claseConciliacion) {
		this.claseConciliacion = claseConciliacion;
	}

	public String getApoderadoNombre() {
		return apoderadoNombre;
	}

	public void setApoderadoNombre(String apoderadoNombre) {
		this.apoderadoNombre = apoderadoNombre;
	}

	public String getApoderadoDocumento() {
		return apoderadoDocumento;
	}

	public void setApoderadoDocumento(String apoderadoDocumento) {
		this.apoderadoDocumento = apoderadoDocumento;
	}

	public String getApoderadoTarjeta() {
		return apoderadoTarjeta;
	}

	public void setApoderadoTarjeta(String apoderadoTarjeta) {
		this.apoderadoTarjeta = apoderadoTarjeta;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Date getFechaRechazo() {
		return fechaRechazo;
	}

	public void setFechaRechazo(Date fechaRechazo) {
		this.fechaRechazo = fechaRechazo;
	}

	public String getRazonRechazo() {
		return razonRechazo;
	}

	public void setRazonRechazo(String razonRechazo) {
		this.razonRechazo = razonRechazo;
	}

	public String getIntervencion() {
		return intervencion;
	}

	public void setIntervencion(String intervencion) {
		this.intervencion = intervencion;
	}

	public String getResultado() {
		return resultado;
	}

	public void setResultado(String resultado) {
		this.resultado = resultado;
	}

	public String getRazon() {
		return razon;
	}

	public void setRazon(String razon) {
		this.razon = razon;
	}

	public Long getComite() {
		return comite;
	}

	public void setComite(Long comite) {
		this.comite = comite;
	}
	
	

}
