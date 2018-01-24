package com.calarcasi.honos.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.calarcasi.honos.entities.seguridad.Menu;
import com.calarcasi.honos.entities.seguridad.Opcion;
import com.calarcasi.honos.entities.seguridad.Rol;
import com.calarcasi.honos.entities.seguridad.Usuario;
import com.calarcasi.honos.pojos.seguridad.MenuPojo;
import com.calarcasi.honos.pojos.seguridad.OpcionPojo;
import com.calarcasi.honos.pojos.seguridad.RolPojo;
import com.calarcasi.honos.pojos.seguridad.UsuarioPojo;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiIssuer;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.UnauthorizedException;

/** The Echo API which Endpoints will be exposing. */
// [START echo_api_annotation]
@Api(name = "honos", version = "seguridad", namespace = @ApiNamespace(ownerDomain = "honos.calarca.com", ownerName = "honos.calarca.com", packagePath = ""),
		// [START_EXCLUDE]
		issuers = {
				@ApiIssuer(name = "firebase", issuer = "https://securetoken.google.com/prueba2-1", jwksUri = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com") }
// [END_EXCLUDE]
)
// [END echo_api_annotation]
public class SeguridadService {

	/*
	 * INICIO gestion Opciones
	 */

	@ApiMethod(name = "getOpciones", path = "opciones", httpMethod = HttpMethod.GET)
	public List<Opcion> getOpciones() throws UnauthorizedException {
		return new OpcionPojo().findWithNamedQuery(Opcion.AllOpciones);
	}
	
	@ApiMethod(name = "getOpcionesMenu", path = "opciones/{idMenu}", httpMethod = HttpMethod.GET)
	public List<Opcion> getOpcionesBy(@Named("idMenu") final int idMenu) throws UnauthorizedException {
		
		Map parameters = new HashMap();		
		parameters.put("idMenu", idMenu);		
		
		return new OpcionPojo().findWithNamedQuery(Opcion.OpcionesMenu, parameters);
	}

	@ApiMethod(name = "saveOpcion", path = "opciones", httpMethod = HttpMethod.POST)
	public Opcion saveOpcion(Opcion opcion) throws UnauthorizedException {
		return new OpcionPojo().create(opcion);
	}

	@ApiMethod(name = "deleteOpcion", path = "opciones/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteOpcion(@Named("id") final int id) throws UnauthorizedException {
		new OpcionPojo().delete(id);
	}

	@ApiMethod(name = "updateOpcion", path = "opciones/{id}", httpMethod = HttpMethod.PUT)
	public Opcion updateOpcion(Opcion opcion) throws UnauthorizedException {
		return new OpcionPojo().update(opcion);
	}

	/*
	 * FIN gestion Opciones
	 */

	/*
	 * INICIO gestion MENU
	 */

	@ApiMethod(name = "getMenus", path = "menus", httpMethod = HttpMethod.GET)
	public List<Menu> getMenus() throws UnauthorizedException {
		return new MenuPojo().findWithNamedQuery(Menu.AllMenus);
	}

	@ApiMethod(name = "getMenusRol", path = "menus/{idRol}", httpMethod = HttpMethod.GET)
	public List<Menu> getMenusBy(@Named("idRol") final int idRol) throws UnauthorizedException {
		
		Map parameters = new HashMap();		
		parameters.put("idRol", idRol);		
		
		return new MenuPojo().findWithNamedQuery(Menu.MenusRol, parameters);
	}	
	
	@ApiMethod(name = "saveMenus", path = "menus", httpMethod = HttpMethod.POST)
	public Menu saveMenu(Menu menu) throws UnauthorizedException {
		return new MenuPojo().create(menu);
	}

	@ApiMethod(name = "deleteMenu", path = "menus/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteMenu(@Named("id") final int id) throws UnauthorizedException {
		new MenuPojo().delete(id);
	}

	@ApiMethod(name = "updateMenu", path = "menus/{id}", httpMethod = HttpMethod.PUT)
	public Menu updateMenu(Menu menu) throws UnauthorizedException {
		return new MenuPojo().update(menu);
	}

	/*
	 * FIN gestion MENU
	 */

	/*
	 * INICIO gestion ROL
	 */

	@ApiMethod(name = "getRoles", path = "roles", httpMethod = HttpMethod.GET)
	public List<Rol> getRoles() throws UnauthorizedException {
		return new RolPojo().findWithNamedQuery(Rol.AllRoles);
	}

	@ApiMethod(name = "saveRoles", path = "roles", httpMethod = HttpMethod.POST)
	public Rol saveRol(Rol rol) throws UnauthorizedException {
		return new RolPojo().create(rol);
	}

	@ApiMethod(name = "deleteRol", path = "roles/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteRol(@Named("id") final int id) throws UnauthorizedException {
		new RolPojo().delete(id);
	}

	@ApiMethod(name = "updateRol", path = "roles/{id}", httpMethod = HttpMethod.PUT)
	public Rol updateRol(Rol rol) throws UnauthorizedException {
		return new RolPojo().update(rol);
	}

	/*
	 * FIN gestion ROL
	 */

	/*
	 * INICIO gestion USUARIO
	 */

	@ApiMethod(name = "getUsuarios", path = "usuarios", httpMethod = HttpMethod.GET)
	public List<Usuario> getUsuarios() throws UnauthorizedException {
		return new UsuarioPojo().findWithNamedQuery(Usuario.AllUsuarios);
	}

	@ApiMethod(name = "saveUsuarios", path = "usuarios", httpMethod = HttpMethod.POST)
	public Usuario saveUsuario(Usuario usuario) throws UnauthorizedException {
		return new UsuarioPojo().create(usuario);
	}

	@ApiMethod(name = "deleteUsuario", path = "usuarios/{id}", httpMethod = HttpMethod.DELETE)
	public void deleteUsuario(@Named("id") final int id) throws UnauthorizedException {
		new UsuarioPojo().delete(id);
	}

	@ApiMethod(name = "updateUsuario", path = "usuarios/{id}", httpMethod = HttpMethod.PUT)
	public Usuario updateUsuario(Usuario usuario) throws UnauthorizedException {
		return new UsuarioPojo().update(usuario);
	}

	/*
	 * FIN gestion USUARIO
	 */

}
