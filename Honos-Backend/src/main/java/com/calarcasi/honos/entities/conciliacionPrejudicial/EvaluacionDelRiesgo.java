package com.calarcasi.honos.entities.conciliacionPrejudicial;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ConciliacionPrejudicial
 *
 */
@Embeddable
public class EvaluacionDelRiesgo {

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
	private double riesgoCondena;

	@Column(name = "PROBABILIDAD_CONDENA")
	private String probabilidadCondena;

	public EvaluacionDelRiesgo() {
		super();
	}
	
	public boolean isInfomacionCompleta()
	{
		if(this.fortalezaDefensa != null 
				&& this.fortalezaProbatoriaDefensa != null 
				&& this.fortalezaProbatoriaDemandante != null
				&& this.nivelJurisprudencial  != null 
				&& this.riesgosProcesales != null) 
		{
			return true;
		}
		else 
		{
			return false;
		}
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

	public double getRiesgoCondena() {
		return riesgoCondena;
	}

	public void setRiesgoCondena(double riesgoCondena) {
		this.riesgoCondena = riesgoCondena;
	}

	public String getProbabilidadCondena() {
		return probabilidadCondena;
	}

	public void setProbabilidadCondena(String probabilidadCondena) {
		this.probabilidadCondena = probabilidadCondena;
	}

}
