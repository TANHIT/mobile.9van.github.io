import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const IPhone1415ProMax1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415ProMax7}>
      <View style={[styles.component2, styles.component2Position]}>
        <View style={[styles.component2Child, styles.rectanglePosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1415ProMax")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-339.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone1415ProMax1")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.mobileParentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-337.png")}
          />
          <Text style={styles.van}>9 VAN</Text>
        </View>
      </View>
      <View style={[styles.mobileThanhTcV, styles.mobileParentFlexBox]}>
        <Pressable
          style={styles.constructionhouseOutlineParent}
          onPress={() => navigation.navigate("MobileTngQuan")}
        >
          <Image
            style={[styles.constructionhouseOutlineIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/constructionhouse-outline2.png")}
          />
          <Text style={[styles.tngQuan, styles.lpHcTypo]}>Tổng quan</Text>
        </Pressable>
        <Pressable
          style={[
            styles.usermultipleUsersOutlineParent,
            styles.mobileParentFlexBox,
          ]}
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
          style={[
            styles.usermultipleUsersOutlineParent,
            styles.mobileParentFlexBox,
          ]}
          onPress={() => navigation.navigate("MobileBiCaTi")}
        >
          <View style={styles.datadataOutlineParent}>
            <Image
              style={[styles.datadataOutlineIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/datadata-outline3.png")}
            />
            <Text style={[styles.luyn, styles.lpHcTypo]}>Luyện đề</Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.usermultipleUsersOutlineParent,
            styles.mobileParentFlexBox,
          ]}
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
      <View style={[styles.mobileThanhTmKim, styles.mobileParentFlexBox]}>
        <Text
          style={[styles.lpHc1, styles.lpFlexBox]}
        >{`Lớp học đã kết thúc `}</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={[styles.surface, styles.fillPosition]}>
            <View style={[styles.fill, styles.fillPosition]} />
          </View>
          <Text style={[styles.placeholder, styles.icon5Position]}>
            Tìm kiếm
          </Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.rectanglePosition1]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={styles.label}>Lớp học</Text>
                <Image
                  style={[styles.icon2, styles.icon2Position]}
                  resizeMode="cover"
                  source={require("../assets/icon15.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.focus1Border]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focus1Border]} />
                <Text style={[styles.label1, styles.icon2Position]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={styles.dropdown2}>
                    <Text style={[styles.label2, styles.lpHc1Typo]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.modalElementsScreen, styles.rectanglePosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <View style={styles.modal}>
        <View style={[styles.modal1, styles.modal1Position]}>
          <Image
            style={[styles.fillIcon, styles.modal1Position]}
            resizeMode="cover"
            source={require("../assets/fill51.png")}
          />
          <Pressable
            style={[styles.icon3, styles.mobileParentFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon21.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.icon5, styles.icon5Position]}
          resizeMode="cover"
          source={require("../assets/icon61.png")}
        />
        <View style={styles.titleParent}>
          <Text style={[styles.title, styles.titleLayout]}>Thông báo</Text>
          <Text style={[styles.subtitle, styles.titleLayout]}>
            Hiện tại bạn không có thông báo nào
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component2Position: {
    left: 0,
    width: 430,
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mobileParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  lpHcTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  lpFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  component3Layout: {
    height: 35,
    marginLeft: 8,
  },
  lpTypo: {
    color: Color.gray70,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  fillPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon5Position: {
    left: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  rectanglePosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  focusPosition: {
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
  },
  icon2Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  focus1Border: {
    display: "none",
    borderStyle: "solid",
    position: "absolute",
  },
  lpHc1Typo: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  modal1Position: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleLayout: {
    width: 351,
    color: Color.gray10,
    textAlign: "left",
  },
  component2Child: {
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
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
    height: 46,
    width: 48,
  },
  van: {
    color: Color.stroke2nd,
    marginLeft: 16,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
  },
  rectangleParent: {
    width: "31.63%",
    right: "68.37%",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  component2: {
    height: 90,
    width: 430,
    top: 0,
    left: 0,
    position: "absolute",
  },
  constructionhouseOutlineIcon: {
    height: "64%",
    width: "47.06%",
    right: "26.47%",
    bottom: "36%",
    left: "26.47%",
    top: "0%",
    position: "absolute",
  },
  tngQuan: {
    top: "58%",
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
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  lpHc1: {
    width: 70,
    height: 39,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    display: "flex",
  },
  mobileThanhTmKimChild: {
    borderColor: Color.colorSilver,
    borderRightWidth: 2,
    width: 2,
    marginLeft: 8,
    borderStyle: "solid",
  },
  lp: {
    width: 34,
    height: 20,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
  },
  fill: {
    borderRadius: Border.br_3xs,
    borderColor: Color.gray60,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  surface: {
    opacity: 0.99,
  },
  placeholder: {
    top: 6,
    color: Color.gray70,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  searchIcon: {
    top: 4,
    left: 8,
    position: "absolute",
  },
  input: {
    width: 170,
    marginLeft: 8,
    height: 32,
  },
  focus: {
    borderColor: Color.blue60,
    borderStyle: "solid",
    position: "absolute",
  },
  label: {
    left: 48,
    top: "50%",
    marginTop: -10,
    color: Color.gray20,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    position: "absolute",
  },
  icon2: {
    marginTop: -12,
    height: 24,
    width: 24,
  },
  dropdown: {
    width: 98,
    backgroundColor: Color.white,
    height: 32,
  },
  dropdownWrapper: {
    width: 98,
  },
  component3Inner: {
    height: "27.14%",
    bottom: "72.86%",
    left: "0%",
    top: "0%",
  },
  focus1: {
    borderColor: Color.white,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
  },
  label1: {
    width: 66,
    marginTop: -10,
    left: 16,
    color: Color.gray20,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  dropdown1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    height: 32,
  },
  label2: {
    color: Color.gray20,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
  },
  dropdown2: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs_5,
    alignSelf: "stretch",
    backgroundColor: Color.white,
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownParent: {
    alignSelf: "stretch",
  },
  frameWrapper: {
    marginTop: 3,
    alignSelf: "stretch",
  },
  dropdownMenu: {
    height: "76%",
    width: "102.04%",
    top: "26.86%",
    right: "-1.02%",
    bottom: "-2.86%",
    left: "-1.02%",
    borderRadius: Border.br_11xs,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderColor: Color.gray80,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  component3: {
    width: 98,
    marginLeft: 8,
  },
  mobileThanhTmKim: {
    top: 90,
    left: 1,
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    height: 70,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    width: 430,
  },
  rectangle: {
    backgroundColor: Color.gray80,
    opacity: 0.7,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  modalElementsScreen: {
    right: "-0.23%",
    left: "0.23%",
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  fillIcon: {
    bottom: 1,
    borderRadius: Border.br_9xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon3: {
    top: 16,
    right: 16,
    padding: Padding.p_5xs,
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  modal1: {
    bottom: -1,
  },
  icon5: {
    top: 40,
    height: 48,
    width: 48,
  },
  title: {
    width: 351,
    color: Color.gray10,
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
  },
  subtitle: {
    fontFamily: FontFamily.h5Regular,
    width: 351,
    color: Color.gray10,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    alignItems: "center",
  },
  titleParent: {
    top: 46,
    right: 48,
    left: 104,
    position: "absolute",
  },
  modal: {
    height: "23.28%",
    width: "80.47%",
    top: "36.48%",
    right: "9.53%",
    bottom: "40.24%",
    left: "10%",
    position: "absolute",
  },
  iphone1415ProMax7: {
    backgroundColor: Color.gray90,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default IPhone1415ProMax1;
