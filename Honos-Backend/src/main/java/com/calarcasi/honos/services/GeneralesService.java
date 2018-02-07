package com.calarcasi.honos.services;

import java.util.List;

import com.calarcasi.honos.entities.generales.Apoderado;
import com.calarcasi.honos.entities.generales.Despacho;
import com.calarcasi.honos.entities.generales.Juridica;
import com.calarcasi.honos.entities.generales.MedioControlJudicial;
import com.calarcasi.honos.entities.generales.Natural;
import com.calarcasi.honos.entities.generales.Tema;
import com.calarcasi.honos.entities.generales.Tercero;
import com.calarcasi.honos.pojos.generales.ApoderadoPojo;
import com.calarcasi.honos.pojos.generales.DespachoPojo;
import com.calarcasi.honos.pojos.generales.JuridicaPojo;
import com.calarcasi.honos.pojos.generales.MedioControlJudicialPojo;
import com.calarcasi.honos.pojos.generales.NaturalPojo;
import com.calarcasi.honos.pojos.generales.TemaPojo;
import com.calarcasi.honos.pojos.generales.TerceroPojo;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiIssuer;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.UnauthorizedException;

/** The Echo API which Endpoints will be exposing. */
// [START echo_api_annotation]
@Api(name = "honos", version = "generales", namespace = @ApiNamespace(ownerDomain = "honos.calarca.com", ownerName = "honos.calarca.com", packagePath = ""),
		// [START_EXCLUDE]
		issuers = {
				@ApiIssuer(name = "firebase", issuer = "https://securetoken.google.com/prueba2-1", jwksUri = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com") }
// [END_EXCLUDE]
)
// [END echo_api_annotation]
public class GeneralesService {

	
	/*
	 * INICIO Apoderado
	 */

	@ApiMethod(name = "getApoderado", path = "apoderados", httpMethod = HttpMethod.GET)
	public List<Apoderado> getApoderado() throws UnauthorizedException {
		return new ApoderadoPojo().findWithQuery("select o from Apoderado o");
	}
	
	@ApiMethod(name = "getApoderadoActivos", path = "apoderados/activos", httpMethod = HttpMethod.GET)
	public List<Apoderado> getApoderadoActivos() throws UnauthorizedException {		
		return new ApoderadoPojo().findWithQuery("select o from Apoderado o where o.estado LIKE 'ACT'");
	}
	
	@ApiMethod(name = "getApoderadoById", path = "apoderados/{id}", httpMethod = HttpMethod.GET)
	public Apoderado getApoderadoById(@Named("id") final int id) throws UnauthorizedException {
		return new ApoderadoPojo().find(id);
	}

	@ApiMethod(name = "saveApoderado", path = "apoderados", httpMethod = HttpMethod.POST)
	public Apoderado saveApoderado(Apoderado o) throws UnauthorizedException {
		return new ApoderadoPojo().create(o);
	}

	@ApiMethod(name = "deleteApoderado", path = "apoderados/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteApoderado(@Named("id") final int id) throws UnauthorizedException {
		new ApoderadoPojo().delete(id);
	}

	@ApiMethod(name = "updateApoderado", path = "apoderados/{id}", httpMethod = HttpMethod.PUT)
	public Apoderado updateApoderado(Apoderado o) throws UnauthorizedException {
		return new ApoderadoPojo().update(o);
	}
	
	/*
	 * FIN Apoderado
	 */
	
	

	
	/*
	 * INICIO Despacho
	 */

	@ApiMethod(name = "getDespacho", path = "despachos", httpMethod = HttpMethod.GET)
	public List<Despacho> getDespacho() throws UnauthorizedException {
		return new DespachoPojo().findWithQuery("select o from Despacho o");
	}
	
	@ApiMethod(name = "getDespachoById", path = "despachos/{id}", httpMethod = HttpMethod.GET)
	public Despacho getDespachoById(@Named("id") final int id) throws UnauthorizedException {
		return new DespachoPojo().find(id);
	}

	@ApiMethod(name = "saveDespacho", path = "despachos", httpMethod = HttpMethod.POST)
	public Despacho saveDespacho(Despacho o) throws UnauthorizedException {
		return new DespachoPojo().create(o);
	}

	@ApiMethod(name = "deleteDespacho", path = "despachos/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteDespacho(@Named("id") final int id) throws UnauthorizedException {
		new DespachoPojo().delete(id);
	}

	@ApiMethod(name = "updateDespacho", path = "despachos/{id}", httpMethod = HttpMethod.PUT)
	public Despacho updateDespacho(Despacho o) throws UnauthorizedException {
		return new DespachoPojo().update(o);
	}
	
	/*
	 * FIN Despacho
	 */
	
	/*
	 * INICIO Juridica
	 */

	@ApiMethod(name = "getJuridica", path = "juridicas", httpMethod = HttpMethod.GET)
	public List<Juridica> getJuridica() throws UnauthorizedException {
		return new JuridicaPojo().findWithQuery("select o from Juridica o");
	}
	
	@ApiMethod(name = "getJuridicaById", path = "juridicas/{id}", httpMethod = HttpMethod.GET)
	public Juridica getJuridicaById(@Named("id") final int id) throws UnauthorizedException {
		return new JuridicaPojo().find(id);
	}

	@ApiMethod(name = "saveJuridica", path = "juridicas", httpMethod = HttpMethod.POST)
	public Juridica saveJuridica(Juridica o) throws UnauthorizedException {
		return new JuridicaPojo().create(o);
	}

	@ApiMethod(name = "deleteJuridica", path = "juridicas/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteJuridica(@Named("id") final int id) throws UnauthorizedException {
		new JuridicaPojo().delete(id);
	}

	@ApiMethod(name = "updateJuridica", path = "juridicas/{id}", httpMethod = HttpMethod.PUT)
	public Juridica updateJuridica(Juridica o) throws UnauthorizedException {
		return new JuridicaPojo().update(o);
	}
	
	/*
	 * FIN Juridica
	 */

	/*
	 * INICIO MedioControlJudicial
	 */

	@ApiMethod(name = "getMedioControlJudicial", path = "mediosControlJudicial", httpMethod = HttpMethod.GET)
	public List<MedioControlJudicial> getMedioControlJudicial() throws UnauthorizedException {
		return new MedioControlJudicialPojo().findWithQuery("select o from MedioControlJudicial o");
	}
	
	@ApiMethod(name = "getMedioControlJudicialById", path = "mediosControlJudicial/{id}", httpMethod = HttpMethod.GET)
	public MedioControlJudicial getMedioControlJudicialById(@Named("id") final int id) throws UnauthorizedException {
		return new MedioControlJudicialPojo().find(id);
	}

	@ApiMethod(name = "saveMedioControlJudicial", path = "mediosControlJudicial", httpMethod = HttpMethod.POST)
	public MedioControlJudicial saveMedioControlJudicial(MedioControlJudicial o) throws UnauthorizedException {
		return new MedioControlJudicialPojo().create(o);
	}

	@ApiMethod(name = "deleteMedioControlJudicial", path = "mediosControlJudicial/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteMedioControlJudicial(@Named("id") final int id) throws UnauthorizedException {
		new MedioControlJudicialPojo().delete(id);
	}

	@ApiMethod(name = "updateMedioControlJudicial", path = "mediosControlJudicial/{id}", httpMethod = HttpMethod.PUT)
	public MedioControlJudicial updateMedioControlJudicial(MedioControlJudicial o) throws UnauthorizedException {
		return new MedioControlJudicialPojo().update(o);
	}
	
	/*
	 * FIN MedioControlJudicial
	 */
	
	/*
	 * INICIO Natural
	 */

	@ApiMethod(name = "getNatural", path = "naturales", httpMethod = HttpMethod.GET)
	public List<Natural> getNatural() throws UnauthorizedException {
		return new NaturalPojo().findWithQuery("select o from Natural o");
	}
	
	@ApiMethod(name = "getNaturalById", path = "naturales/{id}", httpMethod = HttpMethod.GET)
	public Natural getNaturalById(@Named("id") final int id) throws UnauthorizedException {
		return new NaturalPojo().find(id);
	}

	@ApiMethod(name = "saveNatural", path = "naturales", httpMethod = HttpMethod.POST)
	public Natural saveNatural(Natural o) throws UnauthorizedException {
		return new NaturalPojo().create(o);
	}

	@ApiMethod(name = "deleteNatural", path = "naturales/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteNatural(@Named("id") final int id) throws UnauthorizedException {
		new NaturalPojo().delete(id);
	}

	@ApiMethod(name = "updateNatural", path = "naturales/{id}", httpMethod = HttpMethod.PUT)
	public Natural updateNatural(Natural o) throws UnauthorizedException {
		return new NaturalPojo().update(o);
	}
	
	/*
	 * FIN Natural
	 */

	/*
	 * INICIO Tema
	 */

	@ApiMethod(name = "getTema", path = "temas", httpMethod = HttpMethod.GET)
	public List<Tema> getTema() throws UnauthorizedException {
		return new TemaPojo().findWithQuery("select o from Tema o");
	}
	
	@ApiMethod(name = "getTemaById", path = "temas/{id}", httpMethod = HttpMethod.GET)
	public Tema getTemaById(@Named("id") final int id) throws UnauthorizedException {
		return new TemaPojo().find(id);
	}

	@ApiMethod(name = "saveTema", path = "temas", httpMethod = HttpMethod.POST)
	public Tema saveTema(Tema o) throws UnauthorizedException {
		return new TemaPojo().create(o);
	}

	@ApiMethod(name = "deleteTema", path = "temas/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteTema(@Named("id") final int id) throws UnauthorizedException {
		new TemaPojo().delete(id);
	}

	@ApiMethod(name = "updateTema", path = "temas/{id}", httpMethod = HttpMethod.PUT)
	public Tema updateTema(Tema o) throws UnauthorizedException {
		return new TemaPojo().update(o);
	}
	
	/*
	 * FIN Tema
	 */
	
	/*
	 * INICIO Tercero
	 */

	@ApiMethod(name = "getTercero", path = "tercero", httpMethod = HttpMethod.GET)
	public List<Tercero> getTercero() throws UnauthorizedException {
		return new TerceroPojo().findWithQuery("select o from Tercero o");
	}
	
	@ApiMethod(name = "getTerceroById", path = "tercero/{id}", httpMethod = HttpMethod.GET)
	public Tercero getTerceroById(@Named("id") final int id) throws UnauthorizedException {
		return new TerceroPojo().find(id);
	}

	@ApiMethod(name = "saveTercero", path = "tercero", httpMethod = HttpMethod.POST)
	public Tercero saveTercero(Tercero o) throws UnauthorizedException {
		return new TerceroPojo().create(o);
	}

	@ApiMethod(name = "deleteTercero", path = "tercero/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteTercero(@Named("id") final int id) throws UnauthorizedException {
		new TerceroPojo().delete(id);
	}

	@ApiMethod(name = "updateTercero", path = "tercero/{id}", httpMethod = HttpMethod.PUT)
	public Tercero updateTercero(Tercero o) throws UnauthorizedException {
		return new TerceroPojo().update(o);
	}
	
	/*
	 * FIN Tercero
	 */
}
