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

public class ConciliacionIncompleta extends Estado<ConciliacionPrejudicial> implements Serializable {

	
	private static final long serialVersionUID = 1L;

	public ConciliacionIncompleta() {
		super("CIN");
	}

	@Override
	public Estado evaluarEstado(ConciliacionPrejudicial c) {
		Estado<ConciliacionPrejudicial> newEstado = c.getEstado();

			if (c.isIformacionCompleta()) 
			{
				newEstado = new ConciliacionCompleta();
			}						

		return newEstado;
	}
   
}
