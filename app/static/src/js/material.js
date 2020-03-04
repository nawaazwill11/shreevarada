const material = function () {

    const components= {
        carousel: {
            name: 'carousel',
            object: M.Carousel,
            options: {},
            // method: {
            //     init: this.object.init,
            //     next: this.object.next,
            //     prev: this.object.prev,
            //     set: this.object.set,
            //     destroy: this.object.destroy
            // },
            get elems() {
                return document.querySelectorAll('.carousel');
            }
        },
        fab: {
            name: 'fab',
            object: M.FloatingActionButton,
            options: {},
            // method: {
            //     init: this.object.init,
            //     open: this.object.open,
            //     close: this.object.close,
            //     destroy: this.object.destroy
            // },
            get elems() {
                return document.querySelectorAll('.fixed-action-btn');
            }
        },
        parallax: {
            name: 'parallax',
            object: M.Parallax,
            options: {},
            // method: {
            //     init: this.object.init,
            //     destroy: this.method.destroy
            // },
            get elems() {
                return document.querySelectorAll('.parallax');
            }
        }
    }

    function getComponentList(){
        return Object.keys(components);
    }
    
    function getComponents(request=[]) {
        let match = [];
        request.forEach(component => {
            if(Object.keys(components).includes(component))
                match.push(components[component]);
        })
        console.log(request);
        console.log(components['fab']);
        return match;
    }
    
    function initComponents(components) {
        if (!components) 
            components = material.components; // All components
        console.log(components);
        components.forEach(component => {
            console.log(component);
            if (component.elems) // initialize only if elements are present
                component.object.init(component.elems, component.options);
        });
    }

    function getInstance(component) {
        return component.object.getInstance(component.elem);
    }

    return {
        components: components,
        getComponentList: getComponentList,
        getComponents: getComponents,
        initComponents: initComponents,
        getInstance: getInstance
    }
}();

export default material;