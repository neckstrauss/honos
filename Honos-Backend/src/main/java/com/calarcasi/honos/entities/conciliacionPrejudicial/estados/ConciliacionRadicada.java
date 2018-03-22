package com.calarcasi.honos.entities.conciliacionPrejudicial.estados;

import com.calarcasi.honos.entities.conciliacionPrejudicial.ConciliacionPrejudicial;
import com.calarcasi.honos.entities.generales.Estado;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Radicada
 *
 */
@Entity()

public class ConciliacionRadicada extends Estado<ConciliacionPrejudicial> implements Serializable {

	private static final long serialVersionUID = 1L;

	public ConciliacionRadicada() {
		super("CRD");
	}

	@Override
	public Estado evaluarEstado(ConciliacionPrejudicial c) {

		Estado<ConciliacionPrejudicial> newEstado = c.getEstado();

		if (c.getConvocados() != null) {
			if (c.isIformacionCompleta()) 
			{
				newEstado = new ConciliacionCompleta();
			}
			else 
			{
				newEstado = new ConciliacionIncompleta();
			}
				
		} 

		return newEstado;
	}

}
