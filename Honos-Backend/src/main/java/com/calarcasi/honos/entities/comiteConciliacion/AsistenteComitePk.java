package com.calarcasi.honos.entities.comiteConciliacion;

import java.io.Serializable;

public class AsistenteComitePk implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long comite;
	
	private int miembro;
	
	public AsistenteComitePk() {
		// TODO Auto-generated constructor stub
	}

	public Long getComite() {
		return comite;
	}

	public void setComite(Long comite) {
		this.comite = comite;
	}

	public int getMiembro() {
		return miembro;
	}

	public void setMiembro(int miembro) {
		this.miembro = miembro;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}

	
	
	
}
