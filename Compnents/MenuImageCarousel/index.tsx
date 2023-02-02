import React, { useState, useCallback } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const MenuImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[
              styles.image,
              { width: windowWidth, height: windowWidth * 0.5 },
            ]}
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        inverted={-1}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 0,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: "#ededed",
    margin: 5,
  },
});

export default MenuImageCarousel;
