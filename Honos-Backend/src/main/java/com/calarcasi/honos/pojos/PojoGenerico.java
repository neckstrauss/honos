package com.calarcasi.honos.pojos;

import java.sql.Connection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.CacheStoreMode;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public abstract class PojoGenerico<T> {

	private EntityManager em;

	private Class<T> type;

	public PojoGenerico(Class<T> c) {
		this.type = c;

		em = EntityFactory.getEntityManager();
	}

	/**
	 * Stores an instance of the entity class in the database
	 * 
	 * @param T
	 *            Object
	 * @return
	 */
	public T create(T t) {
		this.em.getTransaction().begin();
		this.em.persist(t);
		this.em.flush();
		this.em.refresh(t);
		this.em.getTransaction().commit();
		this.em.close();
		return t;
	}

	/**
	 * Retrieves an entity instance that was previously persisted to the database
	 * 
	 * @param T
	 *            Object
	 * @param id
	 * @return
	 */
	public T find(Object id) {
		// this.em.flush();
		// return this.em.find(this.type, id);

		String query = "select o from "+ this.type.getName() +" o where o.id = :id";

		Map parameters = new HashMap();
		parameters.put("id", id);
		
		return  findWithQuery(query, parameters).get(0);

	}

	/**
	 * Removes the record that is associated with the entity instance
	 * 
	 * @param type
	 * @param id
	 */
	public void delete(Object id) {
		this.em.getTransaction().begin();
		Object ref = this.em.getReference(this.type, id);
		this.em.remove(ref);
		this.em.getTransaction().commit();
		this.em.close();
	}

	/**
	 * Removes the number of entries from a table
	 * 
	 * @param <T>
	 * @param items
	 * @return
	 */
	public boolean deleteItems(T[] items) {
		this.em.getTransaction().begin();
		for (T item : items) {
			em.remove(em.merge(item));
		}
		this.em.getTransaction().commit();
		this.em.close();
		return true;
	}

	/**
	 * Updates the entity instance
	 * 
	 * @param <T>
	 * @param t
	 * @return the object that is updated
	 */
	public T update(T item) {
		this.em.getTransaction().begin();
		T item2 = this.em.merge(item);
		this.em.flush();
		this.em.refresh(item2);
		this.em.getTransaction().commit();
		this.em.close();
		return item2;
	}

	/**
	 * Returns the number of records that meet the criteria
	 * 
	 * @param namedQueryName
	 * @return List
	 */
	@SuppressWarnings("unchecked")
	public List<T> findWithNamedQuery(String namedQueryName) {
		return this.em.createNamedQuery(namedQueryName).getResultList();
	}

	@SuppressWarnings("unchecked")
	public List<T> findWithQuery(String queryStr, Map parameters) {

		Set<Map.Entry<String, Object>> rawParameters = parameters.entrySet();

		Query query = em.createQuery(queryStr);
		query.setHint("javax.persistence.cache.storeMode", CacheStoreMode.REFRESH);

		for (Map.Entry<String, Object> entry : rawParameters) {
			query.setParameter(entry.getKey(), entry.getValue());
		}
		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	public List<T> findWithQuery(String queryStr) {

		Query query = em.createQuery(queryStr);
		query.setHint("javax.persistence.cache.storeMode", CacheStoreMode.REFRESH);

		return query.getResultList();
	}

	/**
	 * Returns the number of records that meet the criteria
	 * 
	 * @param namedQueryName
	 * @param parameters
	 * @return List
	 */
	public List<T> findWithNamedQuery(String namedQueryName, Map parameters) {
		return findWithNamedQuery(namedQueryName, parameters, 0);
	}

	/**
	 * Returns the number of records with result limit
	 * 
	 * @param queryName
	 * @param resultLimit
	 * @return List
	 */
	public List<T> findWithNamedQuery(String queryName, int resultLimit) {
		return this.em.createNamedQuery(queryName).setMaxResults(resultLimit).getResultList();
	}

	/**
	 * Returns the number of records that meet the criteria
	 * 
	 * @param <T>
	 * @param sql
	 * @param type
	 * @return List
	 */
	public List<T> findByNativeQuery(String sql) {
		return this.em.createNativeQuery(sql, type).getResultList();
	}

	/**
	 * Returns the number of total records
	 * 
	 * @param namedQueryName
	 * @return int
	 */
	public int countTotalRecord(String namedQueryName) {
		Query query = em.createNamedQuery(namedQueryName);
		Number result = (Number) query.getSingleResult();
		return result.intValue();
	}

	/**
	 * Returns the number of records that meet the criteria with parameter map and
	 * result limit
	 * 
	 * @param namedQueryName
	 * @param parameters
	 * @param resultLimit
	 * @return List
	 */
	public List<T> findWithNamedQuery(String namedQueryName, Map parameters, int resultLimit) {
		Set<Map.Entry<String, Object>> rawParameters = parameters.entrySet();
		Query query = this.em.createNamedQuery(namedQueryName);
		if (resultLimit > 0) {
			query.setMaxResults(resultLimit);
		}
		for (Map.Entry<String, Object> entry : rawParameters) {
			query.setParameter(entry.getKey(), entry.getValue());
		}
		return query.getResultList();
	}

	/**
	 * Returns the number of records that will be used with lazy loading /
	 * pagination
	 * 
	 * @param namedQueryName
	 * @param start
	 * @param end
	 * @return List
	 */
	public List<T> findWithNamedQuery(String namedQueryName, int start, int end) {
		Query query = this.em.createNamedQuery(namedQueryName);
		query.setMaxResults(end - start);
		query.setFirstResult(start);
		return query.getResultList();
	}

	public Connection getConnection() {
		return em.unwrap(java.sql.Connection.class);
	}

	protected EntityManager getEntityManager() {
		return em;
	}
	/*
	 * protected EntityManager getEntityManager() { return em; }
	 * 
	 * @SuppressWarnings("unchecked") public List<E> queryByRange(String jpqlStmt,
	 * int firstResult, int maxResults) { Query query =
	 * getEntityManager().createQuery(jpqlStmt); if (firstResult > 0) { query =
	 * query.setFirstResult(firstResult); } if (maxResults > 0) { query =
	 * query.setMaxResults(maxResults); } return query.getResultList(); }
	 * 
	 * public E persist(E object) { getEntityManager().persist(object); return
	 * object; }
	 * 
	 * public E merge(E object) { return getEntityManager().merge(object); }
	 * 
	 * public void remove(E entity) { E entityToRemove = find(entity.getId());
	 * getEntityManager().remove(entityToRemove); }
	 * 
	 * public E find(P pk) { return getEntityManager().find(type, pk); }
	 * 
	 * 
	 */

}
