package com.calarcasi.honos.entities.generales;

import com.calarcasi.honos.entities.generales.Tercero;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Juridico
 *
 */
@Entity

public class Juridico extends Tercero implements Serializable {

	
	private static final long serialVersionUID = 1L;

	public Juridico() {
		super();
	}
   
}
