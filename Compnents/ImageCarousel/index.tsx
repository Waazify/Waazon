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
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[
              styles.image,
              { width: windowWidth - 20, height: windowWidth * 0.9 },
            ]}
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.root}>
        <View style={styles.dots}>
          {images.map((image, index) => (
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? "#c9c9c9" : "#ededed",
                  marginVertical: 10,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    resizeMode: "contain",
    borderRadius: 20,
    marginBottom: 10,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ededed",
    borderColor: "#c9c9c9",
    margin: 5,
  },
});

export default MenuImageCarousel;
