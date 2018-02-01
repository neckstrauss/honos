package com.calarcasi.honos.entities.conciliacionPrejudicial;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * Entity implementation class for Entity: ConciliacionPrejudicial
 *
 */
@Embeddable
public class Analisis {

	@Column(columnDefinition = "LONGTEXT")
	private String hechos;

	@Column(columnDefinition = "LONGTEXT")
	private String pretensiones;

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


	public Analisis() {
		super();
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
	
	

}
