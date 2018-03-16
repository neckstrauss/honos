package com.calarcasi.honos.entities.conciliacionPrejudicial.estados;

import com.calarcasi.honos.entities.conciliacionPrejudicial.ConciliacionPrejudicial;
import com.calarcasi.honos.entities.generales.Estado;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Radicada
 *
 */
@Entity

public class FichaConciliacionRechazadaComite extends Estado<ConciliacionPrejudicial> implements Serializable {

	
	private static final long serialVersionUID = 1L;

	public FichaConciliacionRechazadaComite() {
		super("CFR");
	}

	@Override
	public Estado evaluarEstado(ConciliacionPrejudicial c) {
		// TODO Auto-generated method stub
		return null;
	}
   
}
