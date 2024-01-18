import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const MobileTngQuan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileTngQuan}>
      <View style={[styles.component2, styles.component2Layout]}>
        <View style={[styles.component2Child, styles.childPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1415ProMax")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-339.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone1415ProMax1")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-337.png")}
          />
          <Text style={[styles.van, styles.vanTypo]}>9 VAN</Text>
        </View>
      </View>
      <View style={[styles.mobileThanhTcV, styles.parentFlexBox]}>
        <Pressable
          style={styles.constructionhouseOutlineParent}
          onPress={() => navigation.navigate("MobileTngQuan")}
        >
          <Image
            style={[styles.constructionhouseOutlineIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/constructionhouse-outline21.png")}
          />
          <Text style={[styles.tngQuan, styles.labelTypo]}>Tổng quan</Text>
        </Pressable>
        <Pressable
          style={[styles.usermultipleUsersOutlineParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("MobileLpHcHinTi")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/usermultiple-users-outline.png")}
          />
          <Text style={styles.lpHcTypo}>Lớp học</Text>
        </Pressable>
        <Pressable
          style={[styles.usermultipleUsersOutlineParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("MobileBiCaTi")}
        >
          <View style={styles.datadataOutlineParent}>
            <Image
              style={[styles.datadataOutlineIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/datadata-outline3.png")}
            />
            <Text style={[styles.luyn, styles.lpHcTypo]}>Luyện đề</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.usermultipleUsersOutlineParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("MobileBiTp")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/file-systemfile-with-itens-outline2.png")}
          />
          <Text style={styles.lpHcTypo}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={styles.component1Parent}>
        <View style={[styles.component1, styles.componentLayout]}>
          <Image
            style={[styles.component1Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4204.png")}
          />
          <Image
            style={[styles.line12Stroke, styles.lp9APosition]}
            resizeMode="cover"
            source={require("../assets/line-12-stroke.png")}
          />
          <Image
            style={[styles.image10Icon, styles.lp9APosition]}
            resizeMode="cover"
            source={require("../assets/image-10.png")}
          />
          <Text style={[styles.hcSinh, styles.lp9APosition]}>30 học sinh</Text>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <View style={[styles.buttonThamGia, styles.buttonPosition]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon311.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Tham gia</Text>
            </View>
          </View>
          <View style={[styles.buttonThngTin, styles.buttonPosition]}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon311.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Thông tin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <Image
            style={[styles.component1Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4204.png")}
          />
          <Image
            style={[styles.line12Stroke, styles.lp9APosition]}
            resizeMode="cover"
            source={require("../assets/line-12-stroke.png")}
          />
          <Image
            style={[styles.image10Icon, styles.lp9APosition]}
            resizeMode="cover"
            source={require("../assets/image-10.png")}
          />
          <Text style={[styles.hcSinh, styles.lp9APosition]}>30 học sinh</Text>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <View style={[styles.buttonThamGia, styles.buttonPosition]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon311.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Tham gia</Text>
            </View>
          </View>
          <View style={[styles.buttonThngTin, styles.buttonPosition]}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon311.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Thông tin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component12, styles.componentLayout]}>
          <Image
            style={[styles.component1Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4204.png")}
          />
          <Image
            style={[styles.line12Stroke2, styles.line12Layout]}
            resizeMode="cover"
            source={require("../assets/line-12-stroke.png")}
          />
          <Image
            style={[styles.image10Icon, styles.lp9APosition]}
            resizeMode="cover"
            source={require("../assets/image-10.png")}
          />
          <Text style={[styles.hcSinh, styles.lp9APosition]}>30 học sinh</Text>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <View style={[styles.buttonThamGia, styles.buttonPosition]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon321.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Tham gia</Text>
            </View>
          </View>
          <View style={[styles.buttonThngTin, styles.buttonPosition]}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon321.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Thông tin</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component2Layout: {
    width: 430,
    left: 0,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  vanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  labelTypo: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
  },
  lpHcTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  componentLayout: {
    height: 343,
    width: 273,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lp9APosition: {
    left: "17.22%",
    position: "absolute",
  },
  buttonPosition: {
    bottom: "8.75%",
    top: "81.92%",
    width: "28.57%",
    height: "9.33%",
    position: "absolute",
  },
  buttonFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  line12Layout: {
    width: "65.93%",
    height: "0.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component2Child: {
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  wrapper: {
    left: "87.21%",
    top: "24.44%",
    right: "2.33%",
    bottom: "24.44%",
    width: "10.47%",
    height: "51.11%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "80.23%",
    top: "38.89%",
    right: "16.28%",
    bottom: "38.89%",
    width: "3.49%",
    height: "22.22%",
    position: "absolute",
  },
  frameChild: {
    borderRadius: 12,
    width: 48,
    height: 46,
  },
  van: {
    fontSize: FontSize.h1Bold_size,
    lineHeight: 36,
    color: Color.stroke2nd,
    marginLeft: 16,
  },
  rectangleParent: {
    width: "31.63%",
    right: "68.37%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  component2: {
    height: 90,
    top: 0,
    position: "absolute",
  },
  constructionhouseOutlineIcon: {
    height: "64%",
    width: "47.06%",
    right: "26.47%",
    bottom: "36%",
    left: "26.47%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  tngQuan: {
    top: "58%",
    color: Color.primaryColorDefault40,
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    fontSize: FontSize.h4Bold_size,
    left: "0%",
    position: "absolute",
  },
  constructionhouseOutlineParent: {
    width: 68,
    height: 50,
  },
  usermultipleUsersOutline: {
    width: 32,
    height: 32,
  },
  usermultipleUsersOutlineParent: {
    marginLeft: 50,
  },
  datadataOutlineIcon: {
    height: "61.19%",
    width: "54.24%",
    right: "22.03%",
    bottom: "38.81%",
    left: "23.73%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  luyn: {
    top: "59.85%",
    left: "0%",
    position: "absolute",
  },
  datadataOutlineParent: {
    width: 59,
    height: 52,
  },
  mobileThanhTcV: {
    top: 859,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  component1Child: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  line12Stroke: {
    top: "56.85%",
    bottom: "42.86%",
    right: "16.85%",
    width: "65.93%",
    height: "0.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image10Icon: {
    height: "42.86%",
    width: "65.57%",
    top: "10.5%",
    right: "17.22%",
    bottom: "46.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  hcSinh: {
    top: "70.26%",
    fontFamily: FontFamily.h5Regular,
    color: Color.green70,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
  },
  lp9A: {
    top: "62.1%",
    fontSize: FontSize.h3Bold_size,
    lineHeight: 24,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  icon2: {
    width: 24,
    height: 24,
    display: "none",
  },
  label: {
    color: Color.white,
    marginLeft: 8,
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    fontSize: FontSize.h4Bold_size,
  },
  button: {
    backgroundColor: Color.primaryColorDefault40,
  },
  buttonThamGia: {
    left: "54.58%",
    right: "16.85%",
  },
  button1: {
    backgroundColor: Color.green70,
  },
  buttonThngTin: {
    right: "53.85%",
    left: "17.58%",
  },
  component1: {
    top: 0,
  },
  component11: {
    top: 383,
  },
  line12Stroke2: {
    top: "57.14%",
    right: "-49.08%",
    bottom: "42.57%",
    left: "83.15%",
    position: "absolute",
  },
  component12: {
    top: 766,
  },
  component1Parent: {
    top: 106,
    left: 87,
    height: 763,
    width: 273,
    position: "absolute",
  },
  mobileTngQuan: {
    backgroundColor: Color.gray90,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default MobileTngQuan;
