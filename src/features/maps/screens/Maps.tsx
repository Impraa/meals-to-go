import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantContext } from "../../../../context/RestaurantContext";
import { RestaurantType } from "../../../utils/Interfaces";
import { space } from "../../../utils/Infrastructure";

export const locations = {
  antwerp: {
    results: [
      {
        geometry: {
          location: {
            lng: 4.402464,
            lat: 51.219448,
          },
          viewport: {
            northeast: {
              lat: 51.2145994302915,
              lng: 4.418074130291502,
            },
            southwest: {
              lat: 51.2119014697085,
              lng: 4.415376169708497,
            },
          },
        },
      },
    ],
  },
  "san francisco": {
    results: [
      {
        geometry: {
          location: { lat: 37.7749295, lng: -122.4194155 },
          viewport: {
            northeast: { lat: 37.812, lng: -122.3482 },
            southwest: { lat: 37.70339999999999, lng: -122.527 },
          },
        },
      },
    ],
    status: "OK",
  },
  chicago: {
    results: [
      {
        geometry: {
          location: {
            lng: -87.629799,
            lat: 41.878113,
          },
          viewport: {
            northeast: {
              lat: 41.88758823029149,
              lng: -87.6194830697085,
            },
            southwest: {
              lat: 41.88489026970849,
              lng: -87.6221810302915,
            },
          },
        },
      },
    ],
  },
  toronto: {
    results: [
      {
        geometry: {
          location: {
            lng: -79.383186,
            lat: 43.653225,
          },
          viewport: {
            northeast: {
              lat: 43.64794098029149,
              lng: -79.37325551970848,
            },
            southwest: {
              lat: 43.6452430197085,
              lng: -79.37595348029149,
            },
          },
        },
      },
    ],
  },
};

const Maps = () => {
  const [searchQuery, setSearchQuery] = useState<string>("chicago");
  const [submitedValue, setSubmitedValue] = useState<string>("chicago");

  const { restaurant, isLoading } = useContext(RestaurantContext);

  const [filteredRestaurants, setFilteredRestaurants] = useState<
    RestaurantType[] | null
  >(restaurant);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSubmitSearch = () => {
    setSubmitedValue(searchQuery);
  };

  useEffect(() => {
    if (restaurant)
      setFilteredRestaurants(
        restaurant.filter((res) => {
          return res.name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase());
        })
      );
  }, [restaurant, searchQuery]);

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = locations[submitedValue.toLocaleLowerCase()].results[0]
      .geometry.viewport.northeast
      ? locations[searchQuery.toLocaleLowerCase()].results[0].geometry.viewport
          .northeast.lat
      : 0;
    console.log(northeastLat);
    const southwestLat = locations[submitedValue.toLocaleLowerCase()].results[0]
      .geometry.viewport.southwest
      ? locations[submitedValue.toLocaleLowerCase()].results[0].geometry
          .viewport.southwest.lat
      : 0;

    console.log(
      locations[submitedValue.toLocaleLowerCase()].results[0].geometry.location
    );

    setLatDelta(northeastLat - southwestLat);
  }, [submitedValue]);

  return (
    <>
      <View style={styles.searchContainer}>
        <Searchbar
          icon={"map"}
          elevation={5}
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          onSubmitEditing={onSubmitSearch}
          value={searchQuery}
          mode="view"
        />
      </View>
      <MapView
        style={styles.mapContainer}
        region={{
          latitude:
            locations[submitedValue.toLocaleLowerCase()].results[0].geometry
              .location.lat,
          longitude:
            locations[submitedValue.toLocaleLowerCase()].results[0].geometry
              .location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {/*   {filteredRestaurants
    ? filteredRestaurants.map((item) => (
        <MapView.Marker
          key={item._id}
          coordinate={{
            latitude: item.,
            longitude: item.longitude,
          }}
          title={item.name}
        />
      ))
    : null} */}
      </MapView>
    </>
  );
};

export default Maps;

const styles = StyleSheet.create({
  mapContainer: {
    height: "100%",
    widht: "100%",
  },
  searchContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    marginTop: space[3],
    padding: space[3],
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: "white",
  },
});
