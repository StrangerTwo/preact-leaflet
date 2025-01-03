import { h, RefObject, ComponentChildren } from "preact";
import * as Leaflet from "leaflet";
import { Map } from "leaflet";
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
export const useMapContext: () => {
    map: Map | null;
};
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
