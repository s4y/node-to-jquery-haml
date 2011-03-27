function toHAML(node){
	var nodeName, haml, attributesHash, i, attribute, childNode, childHaml;
	if (node.nodeType === 1) {
		nodeName = '';
		haml = [];
		if (node.id) {
			nodeName += '#';
			nodeName += node.id;
		}
		if (node.className) {
			nodeName += '.';
			nodeName += node.className.split(' ').join('.');
		}
		if ( nodeName.length === 0 || node.nodeName !== 'div') {
			nodeName = '%' + node.nodeName.toLowerCase() + nodeName;
		}
		haml.push(nodeName);
		for (i=0; attribute = node.attributes[i++];) {
			if (attribute.name !== 'id' && attribute.name !== 'class') {
				(attributesHash || (attributesHash = {}))[attribute.name] = attribute.value;
			}
		}
		if (attributesHash) {
			haml.push(attributesHash);
		}
		if (node.childNodes.length) {
			for (i=0; childNode = node.childNodes[i++];) {
				childHaml = toHAML(childNode);
				if (childHaml && ( (typeof childHaml !== 'string') || childHaml.trim())) {
					haml.push(childHaml);
				}
			}
		}
		return haml;
	} else if (node.nodeType === 3) {
		return node.data;
	}
}