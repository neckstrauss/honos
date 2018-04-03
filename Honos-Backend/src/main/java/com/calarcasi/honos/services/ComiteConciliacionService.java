package com.calarcasi.honos.services;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.calarcasi.honos.entities.comiteConciliacion.ComiteConciliacion;
import com.calarcasi.honos.entities.comiteConciliacion.fichaTecnica.FichaConciliacion;
import com.calarcasi.honos.entities.conciliacionPrejudicial.ConciliacionPrejudicial;
import com.calarcasi.honos.entities.conciliacionPrejudicial.estados.FichaConciliacionAplicadaComite;
import com.calarcasi.honos.entities.generales.Apoderado;
import com.calarcasi.honos.pojos.comiteConciliacion.ComiteConciliacionPojo;
import com.calarcasi.honos.pojos.comiteConciliacion.fichaTecnica.FichaConciliacionPojo;
import com.calarcasi.honos.pojos.conciliacionPrejudicial.ConciliacionPrejudicialPojo;
import com.calarcasi.honos.pojos.generales.ApoderadoPojo;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiIssuer;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.UnauthorizedException;

/** The Echo API which Endpoints will be exposing. */
// [START echo_api_annotation]
@Api(name = "honos", version = "comiteConciliacion", namespace = @ApiNamespace(ownerDomain = "honos.calarca.com", ownerName = "honos.calarca.com", packagePath = ""),
		// [START_EXCLUDE]
		issuers = {
				@ApiIssuer(name = "firebase", issuer = "https://securetoken.google.com/prueba2-1", jwksUri = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com") }
// [END_EXCLUDE]
)
// [END echo_api_annotation]
public class ComiteConciliacionService {

	/*
	 * INICIO ComiteConciliacion
	 */

	@ApiMethod(name = "getComiteConciliacion", path = "comitesConciliacion", httpMethod = HttpMethod.GET)
	public List<ComiteConciliacion> getComiteConciliacion() throws UnauthorizedException {
		return new ComiteConciliacionPojo().findWithQuery("select o from ComiteConciliacion o");
	}

	@ApiMethod(name = "getComiteConciliacionActivos", path = "comitesConciliacion/activos", httpMethod = HttpMethod.GET)
	public List<ComiteConciliacion> getComiteConciliacionActivos() throws UnauthorizedException {
		return new ComiteConciliacionPojo()
				.findWithQuery("select o from ComiteConciliacion o where o.estado LIKE 'ACT'");
	}
	
	@ApiMethod(name = "getComiteConciliacionAplicables", path = "comitesConciliacion/aplicables/{idApoderado}", httpMethod = HttpMethod.GET)
	public List<ComiteConciliacion> getComiteConciliacionAplicables(@Named("idApoderado") final int idApoderado) throws UnauthorizedException {
		
		Map<String, Object> parametros  = new HashMap<String, Object>();		
		Calendar now = Calendar.getInstance();
		now.set(Calendar.MINUTE, 0);
        now.set(Calendar.SECOND, 0);
        now.set(Calendar.MILLISECOND, 0);
		now.set(Calendar.HOUR_OF_DAY, 0);		
		parametros.put("fecha", now.getTime());
		
		ComiteConciliacionPojo pojo = new ComiteConciliacionPojo();
		
		List<ComiteConciliacion> comites = pojo
				.findWithQuery("select o from ComiteConciliacion o where o.estado LIKE 'ACT' and o.fechaLimiteRecepcion >= :fecha and o.tipoComite LIKE 'ORDINARIO'", parametros);
		
		
		Apoderado apoderado = new ApoderadoPojo().find(idApoderado);
		parametros.put("apoderado", apoderado);		
		
		List<ComiteConciliacion> comitesExtraordinarios = pojo
				.findWithQuery("select o from ComiteConciliacion o where o.estado LIKE 'ACT' and o.fechaLimiteRecepcion >= :fecha and o.tipoComite LIKE 'EXTRAORDINARIO' and :apoderado MEMBER OF o.apoderadosExtraordinario", parametros);
				
		System.out.println("numero comites: " + comitesExtraordinarios.size());
	
		comites.addAll(comitesExtraordinarios);
		
		return comites;
	}

	@ApiMethod(name = "getComiteConciliacionById", path = "comitesConciliacion/{id}", httpMethod = HttpMethod.GET)
	public ComiteConciliacion getComiteConciliacionById(@Named("id") final int id) throws UnauthorizedException {
		return new ComiteConciliacionPojo().find(id);
	}

	@ApiMethod(name = "saveComiteConciliacion", path = "comitesConciliacion", httpMethod = HttpMethod.POST)
	public ComiteConciliacion saveComiteConciliacion(ComiteConciliacion o) throws UnauthorizedException {

		return new ComiteConciliacionPojo().create(o);
	}

	@ApiMethod(name = "deleteComiteConciliacion", path = "comitesConciliacion/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteComiteConciliacion(@Named("id") final int id) throws UnauthorizedException {
		new ComiteConciliacionPojo().delete(id);
	}

	@ApiMethod(name = "updateComiteConciliacion", path = "comitesConciliacion/{id}", httpMethod = HttpMethod.PUT)
	public ComiteConciliacion updateComiteConciliacion(ComiteConciliacion o) throws UnauthorizedException {

		return new ComiteConciliacionPojo().update(o);
	}

	/*
	 * FIN ComiteConciliacion
	 */
	
	/*
	 * INICIO FichaConciliacion
	 */

	@ApiMethod(name = "getFichaConciliacion", path = "fichasConciliacion", httpMethod = HttpMethod.GET)
	public List<FichaConciliacion> getFichaConciliacion() throws UnauthorizedException {
		return new FichaConciliacionPojo().findWithQuery("select o from FichaConciliacion o");
	}
	
	@ApiMethod(name = "getFichaConciliacionActivos", path = "fichasConciliacion/activos", httpMethod = HttpMethod.GET)
	public List<FichaConciliacion> getFichaConciliacionActivos() throws UnauthorizedException {		
		return new FichaConciliacionPojo().findWithQuery("select o from FichaConciliacion o where o.estado LIKE 'ACT'");
	}
	
	@ApiMethod(name = "getFichaConciliacionById", path = "fichasConciliacion/{id}", httpMethod = HttpMethod.GET)
	public FichaConciliacion getFichaConciliacionById(@Named("id") final int id) throws UnauthorizedException {
		return new FichaConciliacionPojo().find(id);
	}

	@ApiMethod(name = "saveFichaConciliacion", path = "fichasConciliacion", httpMethod = HttpMethod.POST)
	public FichaConciliacion saveFichaConciliacion(FichaConciliacion o) throws UnauthorizedException {
		
		ConciliacionPrejudicialPojo conciliacionPojo = new ConciliacionPrejudicialPojo();
		ComiteConciliacionPojo comitePojo = new ComiteConciliacionPojo();
				
		ConciliacionPrejudicial conciliacion = conciliacionPojo.find(o.getConciliacion()); 
		
		FichaConciliacion ficha = new FichaConciliacion(conciliacion, comitePojo.find(o.getComite()));
				
		FichaConciliacion newFicha = new FichaConciliacionPojo().create(ficha);
		
		conciliacion.setEstado(new FichaConciliacionAplicadaComite());
		
		conciliacionPojo.update(conciliacion);
		
		
		return newFicha;
	}

	@ApiMethod(name = "deleteFichaConciliacion", path = "fichasConciliacion/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteFichaConciliacion(@Named("id") final int id) throws UnauthorizedException {
		new FichaConciliacionPojo().delete(id);
	}

	@ApiMethod(name = "updateFichaConciliacion", path = "fichasConciliacion/{id}", httpMethod = HttpMethod.PUT)
	public FichaConciliacion updateFichaConciliacion(FichaConciliacion o) throws UnauthorizedException {
		return new FichaConciliacionPojo().update(o);
	}
	
	/*
	 * FIN FichaConciliacion
	 */
	
}
