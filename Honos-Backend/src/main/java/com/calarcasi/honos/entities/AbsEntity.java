package com.calarcasi.honos.entities;
import java.io.Serializable;

public abstract class AbsEntity  implements Serializable{
	
	private static final long serialVersionUID = 1L;

	public abstract Long getId();
	
	public abstract String getEstado();
	
	
	@Override
	public boolean equals(Object obj) {
		if(obj == null)
			return false;
		if(!(obj instanceof AbsEntity))
			return false;
		
		return ((AbsEntity)obj).getId().equals(this.getId()) ;
		
		
	}	
	

}
