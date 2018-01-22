package com.calarcasi.honos.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

/**
 * Entity implementation class for Entity: Product
 *
 */
@Entity
@NamedQuery(name = Product.AllProduct, query = "SELECT a FROM Product a ")
public class Product /*extends AbsEntity*/ implements Serializable {

	public final static String AllProduct = "Product.getAllProducts";
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(name="CATEGORIA")
	private String category;
	private String description;
	private double price;
	private String estado;
	
	private static final long serialVersionUID = 1L;

	public Product() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", category=" + category + ", description=" + description
				+ ", price=" + price + ", estado=" + estado + "]";
	}
	
	
   
}
