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
        },
        slider: {
            name: 'slider',
            object: M.Slider,
            options: {},
            get elems() {
                return document.querySelectorAll('.slider');
            }
        },
        dropdown: {
            name: 'dropdown',
            object: M.Dropdown,
            options: {},
            get elems() {
                return document.querySelectorAll('.dropdown-trigger');
            }
        },
        textarea_counter: {
            name: 'textarea_counter',
            object: M.CharacterCounter,
            options: {},
            get elems() {
                return document.querySelectorAll('.character-counter');
            }
        },
        materialbox: {
            name: 'materialbox',
            object: M.Materialbox,
            options: {},
            get elems() {
                return document.querySelectorAll('.materialboxed');
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
        return match;
    }
    
    function initComponents(components_list) {
        if (!components) 
            components_list = material.components; // All components
        
        components_list.forEach(comp_obj => {
            let component = components[comp_obj.name];
            console.log(component.elems);
            component.options = comp_obj.options;
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