import * as Leaflet from "leaflet";
import { Context, h, RefObject, ComponentChildren } from "preact";
interface MapContextProps {
    map: Leaflet.Map | null;
}
export const MapContext: Context<MapContextProps>;
interface MapContainerProps {
    ref?: RefObject<HTMLDivElement>;
    center: Leaflet.LatLngExpression;
    zoom: number;
    children?: ComponentChildren;
    containerId?: string;
    options?: Leaflet.MapOptions;
    height?: string;
    style?: h.JSX.CSSProperties | undefined;
}
export const MapContainer: ({ ref, center, zoom, children, containerId, options, height, style, }: MapContainerProps) => h.JSX.Element;
interface MarkerProps {
    position: Leaflet.LatLngExpression;
    icon?: Leaflet.Icon | Leaflet.DivIcon | undefined;
    options?: Leaflet.MarkerOptions | undefined;
}
export const Marker: (props: MarkerProps) => h.JSX.Element;
interface TileLayerProps {
    url: string;
    options?: Leaflet.TileLayerOptions | undefined;
}
export const TileLayer: (props: TileLayerProps) => h.JSX.Element;
