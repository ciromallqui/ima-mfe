export class TreeControlCheckbox {

    constructor(){}
    
    public changeCheckbox(datos: any) {
        this.changeChildren(datos, datos.checked);
        this.changeParent(datos, datos.checked);
    }

    changeChildren(datos:any, value:any): void {
        if (datos.children) {
            datos.children.forEach((childData:any) => {
            childData.checked = value;
            this.changeChildren(childData, value);
            })
        }
    }

    changeParent(datos: any, value: any): void {
        if (datos.idParametroPadre > 0) {
            if (value) {
            let siblingsThatAreFalse = datos.parent.children.map((item:any) => { //y si todos los hermanos son verdaderos, entonces podemos establecer que los padres sean verdaderos
                return { //Los hijos son solo una serie de cadenas clave, por lo que obtenemos la propiedad seleccionada
                key: item,
                checked: item.checked
                }
            }).filter((child:any) => {
                return !child.checked; //Entonces solo guardamos las que son falsas
            });
            if (!siblingsThatAreFalse.length) { //si no quedan hermanos (lo que significa que todos son verdaderos)
                datos.parent.checked = true;
                this.changeParent(datos.parent, true); //padre verdadero y luego recurrente en la jerarquía
            }
            } else { //si es falso, podemos establecer todos los padres en falso
            datos.parent.checked = false;
            this.changeParent(datos.parent, false);
            }
        }
    }
}