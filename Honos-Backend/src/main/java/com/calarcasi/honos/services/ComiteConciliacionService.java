package com.calarcasi.honos.services;

import java.util.List;

import javax.swing.plaf.synth.SynthSeparatorUI;

import com.calarcasi.honos.entities.comiteConciliacion.ComiteConciliacion;
import com.calarcasi.honos.entities.comiteConciliacion.fichaTecnica.FichaConciliacion;
import com.calarcasi.honos.pojos.comiteConciliacion.ComiteConciliacionPojo;
import com.calarcasi.honos.pojos.comiteConciliacion.fichaTecnica.FichaConciliacionPojo;
import com.calarcasi.honos.pojos.conciliacionPrejudicial.ConciliacionPrejudicialPojo;
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
		
		
		FichaConciliacion ficha = new FichaConciliacion(conciliacionPojo.find(o.getConciliacion()), comitePojo.find(o.getComite()));
		
		return new FichaConciliacionPojo().create(ficha);
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
