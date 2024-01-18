import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const MobileVaiTr = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileVaiTr}>
      <Image
        style={[styles.mobileVaiTrChild, styles.image18IconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-338.png")}
      />
      <Text style={[styles.choMngBn, styles.labelTypo]}>
        Chào mừng bạn đã đến với 9 VAN
      </Text>
      <Text style={styles.websiteChmBiContainer}>
        Website chấm bài thông minhHỗ trợ rèn luyện môn văn hiệu quả
      </Text>
      <View style={[styles.vaiTr, styles.vaiLayout]}>
        <View style={[styles.vaiTrInner, styles.vaiTrInnerPosition]}>
          <View style={[styles.frameParent, styles.buttonFlexBox]}>
            <View style={styles.parentLayout}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.label, styles.labelTypo]}>Học sinh</Text>
              </View>
              <Image
                style={[styles.image19Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/image-19.png")}
              />
            </View>
            <View style={[styles.image17Parent, styles.parentLayout]}>
              <Image
                style={[styles.image17Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/image-17.png")}
              />
              <Pressable
                style={[styles.button, styles.buttonFlexBox]}
                onPress={() => navigation.navigate("MobileTngQuan")}
              >
                <Text style={[styles.label, styles.labelTypo]}>Giáo viên</Text>
              </Pressable>
            </View>
            <View style={[styles.image17Parent, styles.parentLayout]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.label, styles.labelTypo]}>Phụ huynh</Text>
              </View>
              <Image
                style={[styles.image18Icon, styles.image18IconPosition]}
                resizeMode="cover"
                source={require("../assets/image-18.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image18IconPosition: {
    top: 65,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  vaiLayout: {
    height: 343,
    position: "absolute",
  },
  vaiTrInnerPosition: {
    left: 0,
    top: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 200,
    position: "absolute",
  },
  parentLayout: {
    width: 273,
    borderWidth: 2,
    borderColor: Color.gray80,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    height: 343,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  mobileVaiTrChild: {
    left: 72,
    borderRadius: 12,
    width: 287,
    height: 250,
  },
  choMngBn: {
    top: 339,
    left: 103,
    color: Color.colorDarkgray_100,
    lineHeight: 24,
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    position: "absolute",
  },
  websiteChmBiContainer: {
    top: 387,
    left: 99,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.h3Bold_size,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 21,
    color: Color.white,
  },
  button: {
    top: 263,
    left: 98,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.primaryColorDefault40,
    height: 32,
    padding: Padding.p_5xs,
  },
  image19Icon: {
    top: 48,
    left: 35,
    width: 200,
  },
  image17Icon: {
    top: 49,
    left: 18,
    width: 237,
  },
  image17Parent: {
    marginLeft: 71,
  },
  image18Icon: {
    left: 37,
    height: 174,
    width: 200,
  },
  frameParent: {
    left: 0,
    top: 0,
  },
  vaiTrInner: {
    width: 961,
    height: 343,
    position: "absolute",
  },
  vaiTr: {
    top: 501,
    left: 12,
    width: 430,
  },
  mobileVaiTr: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MobileVaiTr;
