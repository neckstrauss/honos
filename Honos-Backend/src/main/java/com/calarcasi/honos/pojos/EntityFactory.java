package com.calarcasi.honos.pojos;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityFactory {
	
	
	public static EntityManager getEntityManager()
	{
		EntityManagerFactory emf =
				 Persistence.createEntityManagerFactory("HonosBackend");
		
		EntityManager em = emf.createEntityManager();
		
		return em;
	}
	

}
