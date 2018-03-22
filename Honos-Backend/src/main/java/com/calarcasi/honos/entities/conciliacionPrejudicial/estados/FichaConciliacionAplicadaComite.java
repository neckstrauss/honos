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

public class FichaConciliacionAplicadaComite extends Estado<ConciliacionPrejudicial> implements Serializable {

	
	private static final long serialVersionUID = 1L;

	public FichaConciliacionAplicadaComite() {
		super("CFA");
	}

	@Override
	public Estado evaluarEstado(ConciliacionPrejudicial c) {
		return c.getEstado();
	}
   
}
