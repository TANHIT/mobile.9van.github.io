import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MobileChung = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileChung}>
      <View style={[styles.component2, styles.component2Position]}>
        <View style={[styles.component2Child, styles.mobileThanhTcVBg]} />
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
          <Text style={[styles.van, styles.vanTypo]}>9 VAN</Text>
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
              source={require("../assets/datadata-outline51.png")}
            />
            <Text style={[styles.luyn, styles.labelLayout]}>Luyện đề</Text>
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
        <Text style={[styles.lpHc1, styles.lpFlexBox]}>Luyện đề chung</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={[styles.surface, styles.linePosition]}>
            <View style={styles.fill} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.dropdown3Position]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={[styles.label, styles.labelPosition1]}>
                  Lớp học
                </Text>
                <Image
                  style={[styles.icon2, styles.icon2Position]}
                  resizeMode="cover"
                  source={require("../assets/icon15.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.dropdownShadowBox]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focusPosition]} />
                <Text style={[styles.label1, styles.icon2Position]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={styles.dropdown2}>
                    <Text style={[styles.label2, styles.labelTypo1]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.chung}>
        <View style={[styles.tableColumn, styles.tablePosition]}>
          <View style={styles.tableCell}>
            <View style={[styles.line, styles.linePosition]} />
            <Text style={[styles.label3, styles.labelTypo]}>Khối</Text>
          </View>
          <View style={[styles.tableCellParent, styles.linePosition]}>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label4, styles.labelTypo]}>Đề bài</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label4, styles.labelTypo]}>
                Câu hỏi chấm
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label4, styles.labelTypo]}>
                Bộ đề chương
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label4, styles.labelTypo]}>Đã giao</Text>
            </View>
            <View style={styles.tableCell5}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={styles.label8}>Table label</Text>
            </View>
          </View>
        </View>
        <View style={[styles.tableColumn1, styles.tablePosition]}>
          <View style={styles.tableCell}>
            <View style={[styles.line, styles.linePosition]} />
            <Text style={[styles.label9, styles.labelPosition]}>9</Text>
          </View>
          <View style={[styles.tableCellParent, styles.linePosition]}>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text
                style={[styles.label10, styles.labelPosition]}
              >{`văn học nghệ thuật đương đại `}</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label10, styles.labelPosition]}>
                Quê hương em ở đâu?
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label10, styles.labelPosition]}>
                Bộ đề 2 - chương 7
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={[styles.label10, styles.labelPosition]}>9 A3</Text>
            </View>
            <View style={styles.tableCell5}>
              <View style={[styles.line, styles.linePosition]} />
              <Text style={styles.label8}>Table label</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.icon3, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/2-icon.png")}
        />
        <Pressable
          style={[styles.icon4, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileChnhS1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon281.png")}
          />
        </Pressable>
        <Pressable
          style={styles.icon6}
          onPress={() => navigation.navigate("MobileGiao1")}
        >
          <Image
            style={[styles.icon7, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/1-icon.png")}
          />
        </Pressable>
      </View>
      <View style={styles.component4}>
        <View style={[styles.dropdown3, styles.dropdown3Position]}>
          <View style={[styles.focus, styles.focusPosition]} />
          <Text style={[styles.label15, styles.labelPosition1]}>Đề bài</Text>
          <Image
            style={[styles.icon2, styles.icon2Position]}
            resizeMode="cover"
            source={require("../assets/icon291.png")}
          />
        </View>
        <View style={[styles.dropdownMenu1, styles.dropdownShadowBox]}>
          <View style={styles.dropdownParent}>
            <View style={styles.dropdown1}>
              <View style={[styles.focus3, styles.focusPosition]} />
              <Text style={[styles.label1, styles.icon2Position]}>
                Đề riêng
              </Text>
            </View>
            <View style={styles.frameWrapper}>
              <View style={styles.dropdownParent}>
                <View style={styles.dropdown2}>
                  <Text style={[styles.label2, styles.labelTypo1]}>
                    Đề chung
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
  mobileThanhTcVBg: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
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
  vanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  lpHcTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  labelLayout: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
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
  linePosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  dropdown3Position: {
    right: "0%",
    width: "100%",
  },
  focusPosition: {
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderStyle: "solid",
    position: "absolute",
  },
  labelPosition1: {
    left: 48,
    top: "50%",
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    position: "absolute",
  },
  icon2Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  dropdownShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderColor: Color.gray80,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_11xs,
    left: "-1.02%",
    right: "-1.02%",
    width: "102.04%",
    display: "none",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  labelTypo1: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  tablePosition: {
    height: 301,
    top: 21,
    position: "absolute",
  },
  labelTypo: {
    width: 92,
    color: Color.gray10,
    left: 16,
    top: "50%",
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  labelPosition: {
    width: 214,
    color: Color.gray10,
    left: 16,
    top: "50%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  iconPosition: {
    bottom: "6.75%",
    top: "85.75%",
    width: "8.33%",
    height: "7.5%",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  component2Child: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
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
    justifyContent: "center",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  component2: {
    height: 90,
    width: 430,
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
    color: Color.blue50,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
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
    backgroundColor: Color.colorGray_100,
    position: "absolute",
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
    borderColor: Color.gray60,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    bottom: 0,
    right: 0,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  surface: {
    opacity: 0.99,
    top: 0,
  },
  placeholder: {
    top: 6,
    left: 40,
    position: "absolute",
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
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
  },
  label: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
    display: "none",
    width: 98,
  },
  component3Inner: {
    height: "27.14%",
    bottom: "72.86%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  focus1: {
    borderColor: Color.white,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    display: "none",
  },
  label1: {
    width: 66,
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  dropdown1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    height: 32,
  },
  label2: {
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
    top: "26.86%",
    bottom: "-2.86%",
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
    width: 430,
    position: "absolute",
  },
  line: {
    backgroundColor: Color.gray80,
    height: 1,
  },
  label3: {
    marginTop: -10,
  },
  tableCell: {
    right: 0,
    backgroundColor: Color.white,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label4: {
    marginTop: -9.65,
  },
  tableCell1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    flex: 1,
  },
  label8: {
    width: 67,
    color: Color.gray10,
    left: 16,
    top: "50%",
    marginTop: -10,
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  tableCell5: {
    alignSelf: "stretch",
    display: "none",
    backgroundColor: Color.white,
    flex: 1,
  },
  tableCellParent: {
    top: 32,
  },
  tableColumn: {
    left: 11,
    width: 123,
  },
  label9: {
    marginTop: -10,
  },
  label10: {
    marginTop: -9.65,
  },
  tableColumn1: {
    left: 130,
    width: 245,
  },
  icon3: {
    right: "44.49%",
    left: "47.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon4: {
    right: "26.64%",
    left: "65.03%",
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon7: {
    marginTop: 143,
  },
  icon6: {
    right: 244,
    width: 30,
    height: 30,
    top: "50%",
    position: "absolute",
  },
  chung: {
    top: 180,
    left: 20,
    width: 390,
    height: 400,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  label15: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  dropdown3: {
    height: "26.23%",
    bottom: "73.77%",
    backgroundColor: Color.white,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  focus3: {
    borderColor: Color.blue60,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    display: "none",
  },
  dropdownMenu1: {
    height: "69.67%",
    top: "31.15%",
    bottom: "-0.82%",
  },
  component4: {
    top: 108,
    left: 322,
    height: 122,
    width: 98,
    position: "absolute",
  },
  mobileChung: {
    backgroundColor: Color.gray90,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MobileChung;
