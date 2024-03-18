import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import * as S from "./style";
import * as P from "../../layouts/nav/style";
import Mypage from "../../../assets/image/nav/temp_profile.png";

const containerStyle = {
  width: "69.5vw",
  height: "100vh",
  border: "1px solid black",
};

const center = {
  lat: 37.5649867,
  lng: 126.985575,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

// const googleApiKey = process.env.REACT_APP_GOOGLE_KEY || "";
const googleApiKey = "AIzaSyAm7xHJD8MezlrgvZ-Gsy7WIKLXrlXsasY";

const MyComponent: React.FC = () => {
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApiKey,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLng | null>(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  // const onLoad = React.useCallback((mapInstance: google.maps.Map) => {
  //   setMap(mapInstance);
  // }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const currentLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        if (map) {
          map.panTo(currentLocation);
        }
        setCurrentPosition(currentLocation);
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const currentLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        setCurrentPosition(currentLocation);
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }, []);

  useEffect(() => {
    if (map && currentPosition) {
      const marker = new google.maps.Marker({
        position: currentPosition,
        map: map,
      });
      return () => {
        marker.setMap(null);
      };
    }
  }, [map, currentPosition]);

  return isLoaded ? (
    <div>
      <S.FloatContainer>
        <P.IconSection onClick={() => navigate("mypage")}>
          <P.ProfileImg src={Mypage} alt="마이" />
        </P.IconSection>
        <S.FloatButtonContainer>
          <S.FloatButton>달력</S.FloatButton>
          <S.FloatButton onClick={getCurrentLocation}>현재 위치</S.FloatButton>
          <S.FloatButton>확대</S.FloatButton>
          <S.FloatButton>축소</S.FloatButton>
        </S.FloatButtonContainer>
      </S.FloatContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={OPTIONS}
      >
        {currentPosition && <Marker position={currentPosition}></Marker>}
      </GoogleMap>
    </div>
  ) : (
    <div>[로딩중...] GoogleMapContainer가 로드되지 않았습니다.</div>
  );
};

export default React.memo(MyComponent);
