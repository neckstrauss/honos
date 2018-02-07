package com.calarcasi.honos.services;

import java.util.List;

import com.calarcasi.honos.entities.conciliacionPrejudicial.ConciliacionPrejudicial;
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
@Api(name = "honos", version = "conciliacionPrejudicial", namespace = @ApiNamespace(ownerDomain = "honos.calarca.com", ownerName = "honos.calarca.com", packagePath = ""),
		// [START_EXCLUDE]
		issuers = {
				@ApiIssuer(name = "firebase", issuer = "https://securetoken.google.com/prueba2-1", jwksUri = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com") }
// [END_EXCLUDE]
)
// [END echo_api_annotation]
public class ConciliacionPrejudicialService {

	/*
	 * INICIO ConciliacionPrejudicial
	 */

	@ApiMethod(name = "getConciliacionPrejudicial", path = "conciliacionesPrejudiciales", httpMethod = HttpMethod.GET)
	public List<ConciliacionPrejudicial> getConciliacionPrejudicial() throws UnauthorizedException {
		return new ConciliacionPrejudicialPojo().findWithQuery("select o from ConciliacionPrejudicial o");
	}
	
	@ApiMethod(name = "getConciliacionPrejudicialById", path = "conciliacionesPrejudiciales/{id}", httpMethod = HttpMethod.GET)
	public ConciliacionPrejudicial getConciliacionPrejudicialById(@Named("id") final int id) throws UnauthorizedException {
		return new ConciliacionPrejudicialPojo().find(id);
	}

	@ApiMethod(name = "saveConciliacionPrejudicial", path = "conciliacionesPrejudiciales", httpMethod = HttpMethod.POST)
	public ConciliacionPrejudicial saveConciliacionPrejudicial(ConciliacionPrejudicial o) throws UnauthorizedException {
		return new ConciliacionPrejudicialPojo().create(o);
	}

	@ApiMethod(name = "deleteConciliacionPrejudicial", path = "conciliacionesPrejudiciales/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteConciliacionPrejudicial(@Named("id") final int id) throws UnauthorizedException {
		new ConciliacionPrejudicialPojo().delete(id);
	}

	@ApiMethod(name = "updateConciliacionPrejudicial", path = "conciliacionesPrejudiciales/{id}", httpMethod = HttpMethod.PUT)
	public ConciliacionPrejudicial updateConciliacionPrejudicial(ConciliacionPrejudicial o) throws UnauthorizedException {
		return new ConciliacionPrejudicialPojo().update(o);
	}
	
	/*
	 * FIN ConciliacionPrejudicial
	 */

}
