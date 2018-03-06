package com.calarcasi.honos.entities.conciliacionPrejudicial;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Persistence;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.eclipse.persistence.jpa.config.Cascade;

import com.calarcasi.honos.entities.MyDate;
import com.calarcasi.honos.entities.generales.Apoderado;
import com.calarcasi.honos.entities.generales.Despacho;
import com.calarcasi.honos.entities.generales.MedioControlJudicial;
import com.calarcasi.honos.entities.generales.Tema;
import com.calarcasi.honos.entities.generales.Tercero;
import static javax.persistence.CascadeType.PERSIST;

/**
 * Entity implementation class for Entity: ConciliacionPrejudicial
 *
 */
@Entity

public class ConciliacionPrejudicial implements Serializable {

	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="NUMERO_RADICACION_INTERNO")
	private int numeroRadicacionIterno;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="FECHA_RADICACION_INTERNA")
	private Date fechaRadicacionInterna;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="FECHA_NOTIFICACION")
	private Date fechaNotificacion;
	
	@ManyToOne()
	@JoinColumn(name="TEMA_ID")
	private Tema tema;
	
	@ManyToOne()
	@JoinColumn(name="MEDIO_CONTROL_JUDICIAL_ID")
	private MedioControlJudicial medioControlJudicial;
	
	@ManyToOne
	@JoinColumn(name="APODERADO_ID")
	private Apoderado apoderado;
	
	@ManyToMany
	@JoinTable(name="CONVOCADOS_CONCILIACION",
	joinColumns=@JoinColumn(name="CONCILIACION_ID"),
	inverseJoinColumns=@JoinColumn(name="CONVOCADO_ID"))
	private List<Tercero> convocados;
	
	@ManyToMany
	@JoinTable(name="CONVOCANTES_CONCILIACION",
	joinColumns=@JoinColumn(name="CONCILIACION_ID"),
	inverseJoinColumns=@JoinColumn(name="CONVOCANTE_ID"))
	private List<Tercero> convocantes;
	
	@ManyToOne()
	@JoinColumn(name="DESPACHO_ID")
	private Despacho despacho;
	
	@Column(precision=20)
	private double pretension;
	
	@Column(name="RADICADO_PROCURADURIA")
	private String radicadoProcuraduria;
	
	private String estado;
	
	@Embedded
	private Analisis analisis;
	
	private static final long serialVersionUID = 1L;

	public ConciliacionPrejudicial() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	public int getNumeroRadicacionIterno() {
		return numeroRadicacionIterno;
	}
	public void setNumeroRadicacionIterno(int numeroRadicacionIterno) {
		this.numeroRadicacionIterno = numeroRadicacionIterno;
	}
	public Date getFechaRadicacionInterna() {
		return fechaRadicacionInterna;
	}
	public void setFechaRadicacionInterna(MyDate fechaRadicacionInterna) {
		this.fechaRadicacionInterna = fechaRadicacionInterna;
	}
	
		
	public Date getFechaNotificacion() {
		return fechaNotificacion;
	}
	public void setFechaNotificacion(MyDate fechaNotificacion) {
		this.fechaNotificacion = fechaNotificacion;
	}
	public Tema getTema() {
		return tema;
	}
	public void setTema(Tema tema) {
		this.tema = tema;
	}
	public MedioControlJudicial getMedioControlJudicial() {
		return medioControlJudicial;
	}
	public void setMedioControlJudicial(MedioControlJudicial medioControlJudicial) {
		this.medioControlJudicial = medioControlJudicial;
	}
	public Apoderado getApoderado() {
		return apoderado;
	}
	public void setApoderado(Apoderado apoderado) {
		this.apoderado = apoderado;
	}
	public List<Tercero> getConvocados() {
		return convocados;
	}
	public void setConvocados(List<Tercero> convocados) {
		this.convocados = convocados;
	}
	public List<Tercero> getConvocantes() {
		return convocantes;
	}
	public void setConvocantes(List<Tercero> convocantes) {
		this.convocantes = convocantes;
	}
	public Despacho getDespacho() {
		return despacho;
	}
	public void setDespacho(Despacho despacho) {
		this.despacho = despacho;
	}
	public double getPretension() {
		return pretension;
	}
	public void setPretension(double pretension) {
		this.pretension = pretension;
	}
	public String getRadicadoProcuraduria() {
		return radicadoProcuraduria;
	}
	public void setRadicadoProcuraduria(String radicadoProcuraduria) {
		this.radicadoProcuraduria = radicadoProcuraduria;
	}
	public Analisis getAnalisis() {
		return analisis;
	}
	public void setAnalisis(Analisis analisis) {
		this.analisis = analisis;
	}
	
	
	
	
   
}
