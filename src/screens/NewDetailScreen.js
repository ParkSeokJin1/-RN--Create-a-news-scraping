import React, { useCallback } from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import HeaderGroup from "../components/Header/HeaderGroup";
import HeaderIcon from "../components/Header/HeaderButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "../components/Spacer";
import WebView from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { clipNewsItem } from "../actions/news";

export const NewsDetailScreen = () => {
  const navigation = useNavigation();
  // NewListScreen 에서 넘겨준 데이터를 routes 로  받을 수 있다.
  const routes = useRoute();
  const dispatch = useDispatch();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressFavorite = useCallback(() => {
    dispatch(clipNewsItem(routes.params.newsItem));
  }, []);
  const favoriteNews = useSelector((state) => state.news.favoriteNews) || [];
  const isClipped =
    useSelector((state) =>
      favoriteNews.filter((item) => item.link === routes.params.newsItem.link),
    ).length > 0;

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <HeaderIcon iconName="arrow-back" onPress={onPressBack} />
          <Spacer horizontal space={12} />
          <View style={{ maxWidth: 200, marginRight: 200 }}>
            <HeaderTitle title="NEWS_DETAIL"></HeaderTitle>
          </View>
          <HeaderIcon
            iconName={isClipped ? "heart" : "heart-outline"}
            onPress={onPressFavorite}
          />
        </HeaderGroup>
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
