package com.calarcasi.honos.entities;

public enum Mensajes {
	CREACION_EXITOSA("Registro exitoso."),
	CONSULTA_EXITOSA("Consulta exitosa."),
	CREACION_ERROR("Error al realizar el registro."),
	EDICION_EXITOSA("Actualizacion exitosa."), 
	DE_BAJA_EXITOSA("Dada de baja exitosa."),
	DE_BAJA_ERROR("Error al dar de baja."), 
	UNO_EXITOSO("Consulta exitosa."), 
	UNO_ERROR("Consulta sin resultados."), 
	TODOS_EXITO("Consulta exitosa."),
	COMITE_CONCILIACION_CANCELADO_EXITOSAMENTE("Comite de conciliacion cancelado exitosamente."),
	COMITE_CONCILIACION_CANCELADO_ERROR("No se ha podido cancelar el comite de conciliacion."),
	REGISTRO_DECISION_COMITE_EXITOSO("Registro de decision exitoso."),
	REGISTRO_DECISION_COMITE_ERROR("Error al registrar la decision."),
	FICHA_APLICADA_EXITO("Ficha aplica exitosamente."),
	FICHA_APLICADA_ERROR("Error al aplicar ficha."),
	FICHA_RECHAZADA_EXITO("Ficha rechazada exitosamente."),
	FICHA_RECHAZADA_ERROR("Error al rechazar la ficha.");

	private String mensaje;

	private Mensajes(String mensaje) {
		this.mensaje = mensaje;
	}

	public String toString() {
		return this.mensaje;
	}
}
