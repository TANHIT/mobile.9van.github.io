import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MobileNgNhp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileNgNhp}>
      <Image
        style={styles.mobileNgNhpChild}
        resizeMode="cover"
        source={require("../assets/rectangle-33811.png")}
      />
      <Text style={[styles.luynVitVn, styles.luynVitVnTypo]}>
        Luyện viết văn hay
      </Text>
      <Text style={[styles.chmBiThng, styles.luynVitVnTypo]}>
        Chấm bài thông minh
      </Text>
      <Text style={[styles.choMngBn, styles.choMngBnTypo]}>
        Chào mừng bạn đã đến với 9 VAN
      </Text>
      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("MobileVaiTr")}
      >
        <Text style={[styles.continueWithGoogle, styles.choMngBnTypo]}>
          Continue with Google
        </Text>
        <Image
          style={styles.plusIcon}
          resizeMode="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
      <View style={[styles.button1, styles.buttonShadowBox]}>
        <Text style={[styles.continueWithGoogle, styles.choMngBnTypo]}>
          Continue with Google
        </Text>
        <Image
          style={styles.plusIcon}
          resizeMode="cover"
          source={require("../assets/plus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  luynVitVnTypo: {
    textAlign: "left",
    color: Color.blue60,
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    position: "absolute",
  },
  choMngBnTypo: {
    lineHeight: 24,
    fontSize: FontSize.h3Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 288,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_3xs,
    left: 74,
    position: "absolute",
    backgroundColor: Color.white,
  },
  mobileNgNhpChild: {
    top: 145,
    left: 75,
    borderRadius: 12,
    width: 287,
    height: 250,
    position: "absolute",
  },
  luynVitVn: {
    top: 435,
    left: 114,
  },
  chmBiThng: {
    top: 511,
    left: 99,
  },
  choMngBn: {
    top: 587,
    left: 95,
    color: Color.colorDarkgray_100,
    position: "absolute",
  },
  continueWithGoogle: {
    color: Color.colorGray_200,
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  button: {
    top: 651,
  },
  button1: {
    top: 731,
  },
  mobileNgNhp: {
    flex: 1,
    width: "100%",
    height: 916,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MobileNgNhp;
