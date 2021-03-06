ALTER TABLE CONCILIACIONPREJUDICIAL DROP FOREIGN KEY FK_CONCILIACIONPREJUDICIAL_TEMA_ID
ALTER TABLE CONCILIACIONPREJUDICIAL DROP FOREIGN KEY FK_CONCILIACIONPREJUDICIAL_APODERADO_ID
ALTER TABLE CONCILIACIONPREJUDICIAL DROP FOREIGN KEY FK_CONCILIACIONPREJUDICIAL_DESPACHO_ID
ALTER TABLE CONCILIACIONPREJUDICIAL DROP FOREIGN KEY CONCILIACIONPREJUDICIAL_MEDIO_CONTROL_JUDICIAL_ID
ALTER TABLE USUARIO DROP FOREIGN KEY FK_USUARIO_ROL_ID
ALTER TABLE CONVOCADOS_CONCILIACION DROP FOREIGN KEY FK_CONVOCADOS_CONCILIACION_CONVOCADO_ID
ALTER TABLE CONVOCADOS_CONCILIACION DROP FOREIGN KEY FK_CONVOCADOS_CONCILIACION_CONCILIACION_ID
ALTER TABLE CONVOCANTES_CONCILIACION DROP FOREIGN KEY FK_CONVOCANTES_CONCILIACION_CONCILIACION_ID
ALTER TABLE CONVOCANTES_CONCILIACION DROP FOREIGN KEY FK_CONVOCANTES_CONCILIACION_CONVOCANTE_ID
ALTER TABLE OPCIONES_MENU DROP FOREIGN KEY FK_OPCIONES_MENU_MENU_ID
ALTER TABLE OPCIONES_MENU DROP FOREIGN KEY FK_OPCIONES_MENU_OPCION_ID
ALTER TABLE MENUS_ROL DROP FOREIGN KEY FK_MENUS_ROL_ROL_ID
ALTER TABLE MENUS_ROL DROP FOREIGN KEY FK_MENUS_ROL_MENU_ID
DROP TABLE CONCILIACIONPREJUDICIAL
DROP TABLE EVALUACIONDELRIESGO
DROP TABLE TERCERO
DROP TABLE DESPACHO
DROP TABLE MEDIOCONTROLJUDICIAL
DROP TABLE TEMA
DROP TABLE MENU
DROP TABLE OPCION
DROP TABLE ROL
DROP TABLE USUARIO
DROP TABLE CONVOCADOS_CONCILIACION
DROP TABLE CONVOCANTES_CONCILIACION
DROP TABLE OPCIONES_MENU
DROP TABLE MENUS_ROL
