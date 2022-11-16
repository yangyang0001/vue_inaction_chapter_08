Vue.directive('clickoutside', {
    inserted(el, binding, vnode) {},
    update(el, binding, vnode, oldVnode) {},
    componentUpdated(el, binding, vnode) {},

    bind : function (el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click',documentHandler) ;
    },
    unbind: function (el, binding, vnode) {
        document.removeEventListener ('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});