package com.calarcasi.honos.entities.comiteConciliacion.fichaTecnica;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.calarcasi.honos.entities.comiteConciliacion.ComiteConciliacion;
import com.calarcasi.honos.entities.conciliacionPrejudicial.ConciliacionPrejudicial;
import com.calarcasi.honos.entities.generales.Tercero;

/**
 * Entity implementation class for Entity: FichaConciliacion
 *
 */
@Entity

public class FichaConciliacion extends FichaTecnica {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "CONCILIACION_ID")
	private Long conciliacion;

	@Column(name = "CUANTIA_PRETENSIONES")
	private String cuantiaPretensiones;

	@Column(name = "MEDIO_CONTTROL_JUDICIAL")
	private String medioControlJudicial;

	private String tema;

	private String despacho;

	@Column(name = "RADICADO")
	private String radicado;

	// DESCRIPCION DEL PROCESO

	@Column(columnDefinition = "LONGTEXT")
	private String hechos;

	@Column(columnDefinition = "LONGTEXT")
	private String pretensiones;

	// ANÁLISIS Y CONCEPTO PARA CONCILIAR

	@Column(name = "ANALISIS_CADUCIDAD", columnDefinition = "LONGTEXT")
	private String analisisCaducidad;

	@Column(name = "ANALISIS_JURIDICO_NORMATIVO", columnDefinition = "LONGTEXT")
	private String analisisJuridicoNormativo;

	@Column(columnDefinition = "LONGTEXT")
	private String jurisprudencia;

	@Column(name = "ANALISIS_PROBATORIO", columnDefinition = "LONGTEXT")
	private String analisisProbatorio;

	@Column(name = "POSICION_JURIDICA_ABOGADO", columnDefinition = "LONGTEXT")
	private String posicionJuridicaAbogado;

	@Column(name = "FORTALEZA_DEFENSA")
	private String fortalezaDefensa;

	@Column(name = "FORTALEZA_PROBATORIA_DEFENSA")
	private String fortalezaProbatoriaDefensa;

	@Column(name = "FORTALEZA_PROBATORIA_DEMANDANTE")
	private String fortalezaProbatoriaDemandante;

	@Column(name = "RIESGOS_PROCESALES")
	private String riesgosProcesales;

	@Column(name = "NIVEL_JURISPRUDENCIAL")
	private String nivelJurisprudencial;

	@Column(name = "RIESGO_CONDENA")
	private Double riesgoCondena;

	@Column(name = "PROBABILIDAD_CONDENA")
	private String probabilidadCondena;
	
	@Column(length=600)
	private String convocantes;
	
	@Column(length=600)
	private String convocados;

	public FichaConciliacion() {
		super();
	}

	public Long getConciliacion() {
		return conciliacion;
	}

	public void setConciliacion(Long conciliacion) {
		this.conciliacion = conciliacion;
	}

	public String getCuantiaPretensiones() {
		return cuantiaPretensiones;
	}

	public void setCuantiaPretensiones(String cuantiaPretensiones) {
		this.cuantiaPretensiones = cuantiaPretensiones;
	}

	public String getMedioControlJudicial() {
		return medioControlJudicial;
	}

	public void setMedioControlJudicial(String medioControlJudicial) {
		this.medioControlJudicial = medioControlJudicial;
	}

	public String getTema() {
		return tema;
	}

	public void setTema(String tema) {
		this.tema = tema;
	}

	public String getDespacho() {
		return despacho;
	}

	public void setDespacho(String despacho) {
		this.despacho = despacho;
	}

	public String getRadicado() {
		return radicado;
	}

	public void setRadicado(String radicado) {
		this.radicado = radicado;
	}

	public String getHechos() {
		return hechos;
	}

	public void setHechos(String hechos) {
		this.hechos = hechos;
	}

	public String getPretensiones() {
		return pretensiones;
	}

	public void setPretensiones(String pretensiones) {
		this.pretensiones = pretensiones;
	}

	public String getAnalisisCaducidad() {
		return analisisCaducidad;
	}

	public void setAnalisisCaducidad(String analisisCaducidad) {
		this.analisisCaducidad = analisisCaducidad;
	}

	public String getAnalisisJuridicoNormativo() {
		return analisisJuridicoNormativo;
	}

	public void setAnalisisJuridicoNormativo(String analisisJuridicoNormativo) {
		this.analisisJuridicoNormativo = analisisJuridicoNormativo;
	}

	public String getJurisprudencia() {
		return jurisprudencia;
	}

	public void setJurisprudencia(String jurisprudencia) {
		this.jurisprudencia = jurisprudencia;
	}

	public String getAnalisisProbatorio() {
		return analisisProbatorio;
	}

	public void setAnalisisProbatorio(String analisisProbatorio) {
		this.analisisProbatorio = analisisProbatorio;
	}

	public String getPosicionJuridicaAbogado() {
		return posicionJuridicaAbogado;
	}

	public void setPosicionJuridicaAbogado(String posicionJuridicaAbogado) {
		this.posicionJuridicaAbogado = posicionJuridicaAbogado;
	}

	public String getFortalezaDefensa() {
		return fortalezaDefensa;
	}

	public void setFortalezaDefensa(String fortalezaDefensa) {
		this.fortalezaDefensa = fortalezaDefensa;
	}

	public String getFortalezaProbatoriaDefensa() {
		return fortalezaProbatoriaDefensa;
	}

	public void setFortalezaProbatoriaDefensa(String fortalezaProbatoriaDefensa) {
		this.fortalezaProbatoriaDefensa = fortalezaProbatoriaDefensa;
	}

	public String getFortalezaProbatoriaDemandante() {
		return fortalezaProbatoriaDemandante;
	}

	public void setFortalezaProbatoriaDemandante(String fortalezaProbatoriaDemandante) {
		this.fortalezaProbatoriaDemandante = fortalezaProbatoriaDemandante;
	}

	public String getRiesgosProcesales() {
		return riesgosProcesales;
	}

	public void setRiesgosProcesales(String riesgosProcesales) {
		this.riesgosProcesales = riesgosProcesales;
	}

	public String getNivelJurisprudencial() {
		return nivelJurisprudencial;
	}

	public void setNivelJurisprudencial(String nivelJurisprudencial) {
		this.nivelJurisprudencial = nivelJurisprudencial;
	}

	public Double getRiesgoCondena() {
		return riesgoCondena;
	}

	public void setRiesgoCondena(Double riesgoCondena) {
		this.riesgoCondena = riesgoCondena;
	}

	public String getProbabilidadCondena() {
		return probabilidadCondena;
	}

	public void setProbabilidadCondena(String probabilidadCondena) {
		this.probabilidadCondena = probabilidadCondena;
	}
	
	public String getConvocantes() {
		return convocantes;
	}

	public void setConvocantes(String convocantes) {
		this.convocantes = convocantes;
	}

	public String getConvocados() {
		return convocados;
	}

	public void setConvocados(String convocados) {
		this.convocados = convocados;
	}

	public FichaConciliacion(ConciliacionPrejudicial c, ComiteConciliacion cc) {
		super();

		super.setFechaPostulacion(Calendar.getInstance().getTime());
		super.setComite(cc.getId());
		super.setFechaComite(cc.getFechaComite());
		super.setEstado("ACT") ;
		super.setApoderadoNombre(c.getApoderado().getNombreCompleto()) ;
		super.setApoderadoDocumento( c.getApoderado().getNombreCompleto());
		super.setApoderadoTarjeta(c.getApoderado().getNombreCompleto());
		super.setClaseConciliacion("EXTRAJUDICIAL");
		
		
		this.conciliacion = c.getId();
		this.cuantiaPretensiones = ""  + c.getPretension();
		this.medioControlJudicial = c.getMedioControlJudicial().getNombre();
		this.tema = c.getTema().getNombre();
		this.despacho = (c.getDespacho() != null) ? c.getDespacho().getNombre() : "";
		this.radicado = c.getRadicadoProcuraduria();
		this.hechos = c.getAnalisis().getHechos();
		this.pretensiones = c.getAnalisis().getPretensiones();
		this.analisisCaducidad = c.getAnalisis().getAnalisisCaducidad();
		this.analisisJuridicoNormativo = c.getAnalisis().getAnalisisJuridicoNormativo();
		this.jurisprudencia = c.getAnalisis().getJurisprudencia();
		this.analisisProbatorio = c.getAnalisis().getAnalisisProbatorio();
		this.posicionJuridicaAbogado = c.getAnalisis().getPosicionJuridicaAbogado();
		this.fortalezaDefensa = c.getAnalisis().getEvaluacionRiesgo().getFortalezaDefensa();
		this.fortalezaProbatoriaDefensa = c.getAnalisis().getEvaluacionRiesgo().getFortalezaProbatoriaDefensa();
		this.fortalezaProbatoriaDemandante = c.getAnalisis().getEvaluacionRiesgo().getFortalezaProbatoriaDemandante();
		this.riesgosProcesales = c.getAnalisis().getEvaluacionRiesgo().getRiesgosProcesales();
		this.nivelJurisprudencial = c.getAnalisis().getEvaluacionRiesgo().getNivelJurisprudencial();
		this.riesgoCondena = c.getAnalisis().getEvaluacionRiesgo().getRiesgoCondena();
		this.probabilidadCondena = c.getAnalisis().getEvaluacionRiesgo().getProbabilidadCondena();
		this.setConvocantes("");
		this.setConvocados("");

		for (Tercero t : c.getConvocantes()) {
			this.setConvocantes(this.getConvocantes() + t.getNombreCompleto() + ";");
		}

		for (Tercero t : c.getConvocados()) {
			this.setConvocados(this.getConvocados() + t.getNombreCompleto() + ";");
		}


	}

}
