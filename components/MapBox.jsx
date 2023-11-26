"use client";
// components/Map.jsx

import React, { useState } from "react";

import Map from "react-map-gl";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapView, FirstPersonView } from "@deck.gl/core";

// import map config
import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
} from "../lib/mapconfig.js";

const LocationAggregatorMap = ({
  upperPercentile = 100,
  coverage = 1,
  data,
}) => {
  // creating tooltip
  function getTooltip({ object }) {
    if (!object) {
      return null;
    }
    const lat = object.position[1];
    const lng = object.position[0];
    const count = object.points.length;

    return `\
          latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ""}
          longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ""}
          ${count} locations here`;
  }

  const layers = [
    new HexagonLayer({
      id: "heatmap",
      coverage,
      data,
      elevationRange: [0, 50],
      elevationScale: data && data.length ? 50 : 0,
      extruded: true,
      getPosition: (d) => d,
      pickable: true,
      radius: 25,
      upperPercentile,
      material,

      transitions: {
        elevationScale: 3000,
      },
    }),
  ];

  return (
    <div className="">
      <DeckGL
        className=""
        layers={layers}
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        getTooltip={getTooltip}
      >
        <MapView id="map" width="100%" height="50%" controller={true}>
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/petherem/cl2hdvc6r003114n2jgmmdr24"
          ></Map>
        </MapView>
      </DeckGL>
    </div>
  );
};

export default LocationAggregatorMap;
