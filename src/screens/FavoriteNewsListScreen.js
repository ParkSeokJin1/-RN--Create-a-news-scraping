import React, { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { clippedTabFocus } from "../actions/news";

export const FavoriteNewsListScreen = () => {
  const navigation = useNavigation();
  const data = useSelector((state) => state.news.favoriteNews);
  const dispatch = useDispatch();

  const onPressItem = useCallback((newsItem) => {
    navigation.navigate("NewsDetail", { newsItem });
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(clippedTabFocus());
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderTitle title={"FAVORITE_NEWS_LIST"}></HeaderTitle>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressItem(item)}>
              <View
                style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 8 }}
              >
                <Typography fontSize={24} numOfLines={1}>
                  {item.tile}
                </Typography>
                <Typography fontSize={16} numOfLines={2} color="gray">
                  {item.description}
                </Typography>
              </View>
            </Button>
          );
        }}
      />
    </View>
  );
};
