var $d271t$preact = require("preact");
var $d271t$preacthooks = require("preact/hooks");
require("leaflet/dist/leaflet.css");
var $d271t$leaflet = require("leaflet");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "MapContainer", {
    enumerable: true,
    get: function() {
        return $904796ae67398d60$exports.MapContainer;
    }
});
Object.defineProperty(module.exports, "Marker", {
    enumerable: true,
    get: function() {
        return $d20d4301091631e1$exports.Marker;
    }
});
Object.defineProperty(module.exports, "TileLayer", {
    enumerable: true,
    get: function() {
        return $d768e11e1032442e$exports.TileLayer;
    }
});
Object.defineProperty(module.exports, "useMapContext", {
    enumerable: true,
    get: function() {
        return $4e64a59ea718de66$exports.useMapContext;
    }
});
var $904796ae67398d60$exports = {};
"use strict";
Object.defineProperty($904796ae67398d60$exports, "__esModule", {
    value: true
});
$904796ae67398d60$exports.MapContainer = void 0;



var $3a20b070388d5fe9$exports = {};
"use strict";
Object.defineProperty($3a20b070388d5fe9$exports, "__esModule", {
    value: true
});
$3a20b070388d5fe9$exports.MapProvider = $3a20b070388d5fe9$exports.MapContext = void 0;

const $3a20b070388d5fe9$var$initialState = {
    map: null
};
const $3a20b070388d5fe9$var$MapContext = $3a20b070388d5fe9$exports.MapContext = (0, $d271t$preact.createContext)($3a20b070388d5fe9$var$initialState);
const $3a20b070388d5fe9$var$MapProvider = (_ref)=>{
    let { map: map, children: children } = _ref;
    return (0, $d271t$preact.h)($3a20b070388d5fe9$var$MapContext.Provider, {
        value: {
            map: map
        }
    }, children);
};
$3a20b070388d5fe9$exports.MapProvider = $3a20b070388d5fe9$var$MapProvider;


var $028d7b370f65700b$exports = {};
"use strict";
Object.defineProperty($028d7b370f65700b$exports, "__esModule", {
    value: true
});
$028d7b370f65700b$exports.Map = void 0;



var $028d7b370f65700b$var$Leaflet = $028d7b370f65700b$var$_interopRequireWildcard($d271t$leaflet);

function $028d7b370f65700b$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($028d7b370f65700b$var$_getRequireWildcardCache = function(e) {
        return e ? t : r;
    })(e);
}
function $028d7b370f65700b$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = $028d7b370f65700b$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
const $028d7b370f65700b$var$Map = (_ref)=>{
    let { containerId: containerId, setMap: setMap, options: options } = _ref;
    const map = (0, $d271t$preacthooks.useRef)(null);
    const { center: center, zoom: zoom } = options;
    (0, $d271t$preacthooks.useEffect)(()=>{
        map.current = $028d7b370f65700b$var$Leaflet.map(containerId, options).setView(center, zoom);
        setMap(map.current);
        return ()=>{
            if (map && map.current) map.current.remove();
        };
    }, []);
    return (0, $d271t$preact.h)("div", null);
};
$028d7b370f65700b$exports.Map = $028d7b370f65700b$var$Map;


function $904796ae67398d60$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $904796ae67398d60$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $904796ae67398d60$var$ownKeys(Object(t), !0).forEach(function(r) {
            $904796ae67398d60$var$_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $904796ae67398d60$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $904796ae67398d60$var$_defineProperty(e, r, t) {
    return (r = $904796ae67398d60$var$_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function $904796ae67398d60$var$_toPropertyKey(t) {
    var i = $904796ae67398d60$var$_toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function $904796ae67398d60$var$_toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
const $904796ae67398d60$var$MapContainer = (_ref)=>{
    let { ref: ref, center: center, zoom: zoom, children: children, containerId: containerId = 'map', options: options = {}, height: height = '400px', style: style = {} } = _ref;
    const [map, setMap] = (0, $d271t$preacthooks.useState)(null);
    return (0, $d271t$preact.h)("div", {
        ref: ref,
        id: containerId,
        style: $904796ae67398d60$var$_objectSpread({
            height: height
        }, style)
    }, (0, $d271t$preact.h)($028d7b370f65700b$exports.Map, {
        containerId: containerId,
        setMap: setMap,
        options: $904796ae67398d60$var$_objectSpread($904796ae67398d60$var$_objectSpread({}, options), {}, {
            center: center,
            zoom: zoom
        })
    }), (0, $d271t$preact.h)($3a20b070388d5fe9$exports.MapProvider, {
        map: map
    }, children));
};
$904796ae67398d60$exports.MapContainer = $904796ae67398d60$var$MapContainer;


var $d20d4301091631e1$exports = {};
"use strict";
Object.defineProperty($d20d4301091631e1$exports, "__esModule", {
    value: true
});
$d20d4301091631e1$exports.Marker = void 0;



var $d20d4301091631e1$var$Leaflet = $d20d4301091631e1$var$_interopRequireWildcard($d271t$leaflet);
var $4e64a59ea718de66$exports = {};
"use strict";
Object.defineProperty($4e64a59ea718de66$exports, "__esModule", {
    value: true
});
$4e64a59ea718de66$exports.useMapContext = void 0;


const $4e64a59ea718de66$var$useMapContext = ()=>{
    const context = (0, $d271t$preacthooks.useContext)($3a20b070388d5fe9$exports.MapContext);
    const { map: map } = context;
    return {
        map: map
    };
};
$4e64a59ea718de66$exports.useMapContext = $4e64a59ea718de66$var$useMapContext;


function $d20d4301091631e1$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($d20d4301091631e1$var$_getRequireWildcardCache = function(e) {
        return e ? t : r;
    })(e);
}
function $d20d4301091631e1$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = $d20d4301091631e1$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function $d20d4301091631e1$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $d20d4301091631e1$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $d20d4301091631e1$var$ownKeys(Object(t), !0).forEach(function(r) {
            $d20d4301091631e1$var$_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $d20d4301091631e1$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $d20d4301091631e1$var$_defineProperty(e, r, t) {
    return (r = $d20d4301091631e1$var$_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function $d20d4301091631e1$var$_toPropertyKey(t) {
    var i = $d20d4301091631e1$var$_toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function $d20d4301091631e1$var$_toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
const $d20d4301091631e1$var$Marker = (props)=>{
    const { position: position, icon: icon, options: options = {} } = props;
    const marker = (0, $d271t$preacthooks.useRef)(null);
    const prevProps = (0, $d271t$preacthooks.useRef)(props);
    const { map: map } = (0, $4e64a59ea718de66$exports.useMapContext)();
    (0, $d271t$preacthooks.useEffect)(()=>{
        if (map) marker.current = $d20d4301091631e1$var$Leaflet.marker(position, $d20d4301091631e1$var$_objectSpread($d20d4301091631e1$var$_objectSpread({}, options), {}, {
            icon: icon
        })).addTo(map);
        return ()=>{
            if (map && marker.current) marker.current.removeFrom(map);
        };
    }, [
        map,
        position
    ]);
    // useEffect(() => {
    //   console.log('marker.current: ', marker.current);
    //   if (marker.current) addListenersFromProps(marker.current, props, { filter: ({ prop }: Prop) => !prevProps.current[prop as keyof MarkerProps] });
    //   if (marker.current) removeListenersFromProps(marker.current, prevProps.current, { filter: ({ prop }: Prop) => !props[prop  as keyof MarkerProps] });
    // }, [props]);
    return (0, $d271t$preact.h)("div", null);
};
$d20d4301091631e1$exports.Marker = $d20d4301091631e1$var$Marker;


var $d768e11e1032442e$exports = {};
"use strict";
Object.defineProperty($d768e11e1032442e$exports, "__esModule", {
    value: true
});
$d768e11e1032442e$exports.TileLayer = void 0;



var $d768e11e1032442e$var$Leaflet = $d768e11e1032442e$var$_interopRequireWildcard($d271t$leaflet);

function $d768e11e1032442e$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($d768e11e1032442e$var$_getRequireWildcardCache = function(e) {
        return e ? t : r;
    })(e);
}
function $d768e11e1032442e$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = $d768e11e1032442e$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function $d768e11e1032442e$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $d768e11e1032442e$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $d768e11e1032442e$var$ownKeys(Object(t), !0).forEach(function(r) {
            $d768e11e1032442e$var$_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $d768e11e1032442e$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $d768e11e1032442e$var$_defineProperty(e, r, t) {
    return (r = $d768e11e1032442e$var$_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function $d768e11e1032442e$var$_toPropertyKey(t) {
    var i = $d768e11e1032442e$var$_toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function $d768e11e1032442e$var$_toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
const $d768e11e1032442e$var$TileLayer = (props)=>{
    const { url: url, options: options = {} } = props;
    const tileLayer = (0, $d271t$preacthooks.useRef)(null);
    const prevProps = (0, $d271t$preacthooks.useRef)(props);
    const { map: map } = (0, $4e64a59ea718de66$exports.useMapContext)();
    (0, $d271t$preacthooks.useEffect)(()=>{
        if (map) tileLayer.current = $d768e11e1032442e$var$Leaflet.tileLayer(url, $d768e11e1032442e$var$_objectSpread({}, options)).addTo(map);
        return ()=>{
            if (map && tileLayer.current) tileLayer.current.removeFrom(map);
        };
    }, [
        map,
        url,
        options
    ]);
    // useEffect(() => {
    //   if (tileLayer.current) addListenersFromProps(tileLayer.current, props, { filter: ({ prop }: Prop) => !prevProps.current[prop as keyof TileLayerProps] });
    //   if (tileLayer.current) removeListenersFromProps(tileLayer.current, prevProps.current, { filter: ({ prop }: Prop) => !props[prop  as keyof TileLayerProps] });
    // }, [props]);
    // const propHasChanged = (prop: keyof TileLayerProps) => {
    //   return props[prop] !== prevProps.current[prop];
    // };
    return (0, $d271t$preact.h)("div", null);
};
$d768e11e1032442e$exports.TileLayer = $d768e11e1032442e$var$TileLayer;





