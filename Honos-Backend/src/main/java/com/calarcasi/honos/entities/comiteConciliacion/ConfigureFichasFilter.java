package com.calarcasi.honos.entities.comiteConciliacion;



import org.eclipse.persistence.config.DescriptorCustomizer;
import org.eclipse.persistence.descriptors.ClassDescriptor;
import org.eclipse.persistence.expressions.Expression;
import org.eclipse.persistence.expressions.ExpressionBuilder;
import org.eclipse.persistence.mappings.OneToManyMapping;

public class ConfigureFichasFilter implements DescriptorCustomizer {
	 
	@Override
	public void customize(ClassDescriptor descriptor) throws Exception {
		OneToManyMapping mapping = (OneToManyMapping) descriptor
				.getMappingForAttributeName("fichasTecnicas");
 
		ExpressionBuilder eb = new ExpressionBuilder(mapping
				.getReferenceClass());
		Expression fkExp = eb.getField("NUMERO_COMITE").equal(eb.getParameter("ID"));
		Expression activeExp = eb.get("estado").equal("Activa");
		Expression activeExp2 = eb.get("estado").equal("aprobada");
		Expression activeExp3 = eb.get("estado").equal("improbada");
		
		mapping.setSelectionCriteria(fkExp.and(activeExp.or(activeExp2).or(activeExp3)));
	}
}
