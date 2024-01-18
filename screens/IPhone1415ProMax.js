import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415ProMax9}>
      <View style={[styles.component2, styles.mobileLayout]}>
        <View style={[styles.component2Child, styles.groupChildPosition]} />
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
          <Text style={[styles.van, styles.labelTypo2]}>9 VAN</Text>
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
            source={require("../assets/constructionhouse-outline1.png")}
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
        <Text style={[styles.lpHc1, styles.lpFlexBox]}>Hồ sơ</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.labelTypo1]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={styles.surface}>
            <View style={[styles.fill, styles.fillBorder]} />
          </View>
          <Text style={[styles.placeholder, styles.labelTypo1]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.groupChildPosition1]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={[styles.label, styles.labelTypo]}>Lớp học</Text>
                <Image
                  style={[styles.icon2, styles.labelPosition]}
                  resizeMode="cover"
                  source={require("../assets/icon15.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.groupItemBorder]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focusPosition]} />
                <Text style={[styles.label1, styles.labelPosition]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={[styles.dropdown2, styles.checkboxFlexBox]}>
                    <Text style={[styles.label2, styles.labelLayout1]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentGroupLayout]}>
        <View style={[styles.groupWrapper, styles.parentGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon161.png")}
              />
              <Text style={[styles.label3, styles.labelLayout1]}>Nạp thêm</Text>
            </View>
            <View style={[styles.input1, styles.inputPosition1]}>
              <View style={[styles.surface1, styles.surfacePosition]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <Text style={[styles.placeholder1, styles.placeholderPosition]}>
                50.000 đ
              </Text>
              <Text style={[styles.label4, styles.labelLayout]}>
                Số dư tài khoản
              </Text>
            </View>
            <View style={[styles.input2, styles.inputPosition1]}>
              <View style={[styles.surface1, styles.surfacePosition]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <View style={[styles.dropdown3, styles.surface3Position]}>
                <View style={[styles.fill3, styles.fillPosition]} />
                <Image
                  style={[styles.icon4, styles.icon4Position]}
                  resizeMode="cover"
                  source={require("../assets/icon171.png")}
                />
              </View>
              <Text style={[styles.placeholder2, styles.placeholderPosition]}>
                Giáo viên
              </Text>
              <Text style={[styles.label5, styles.labelLayout]}>
                <Text style={styles.vaiTr}>{`Vai trò `}</Text>
                <Text style={styles.text}>*</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.input3, styles.inputPosition]}>
              <View style={[styles.surface3, styles.surface3Position]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <Text style={[styles.placeholder1, styles.placeholderPosition]}>
                Vũ
              </Text>
              <Text style={[styles.label5, styles.labelLayout]}>
                <Text style={styles.vaiTr}>{`Họ `}</Text>
                <Text style={styles.text}>*</Text>
              </Text>
            </View>
            <View style={[styles.input4, styles.inputPosition]}>
              <View style={[styles.surface3, styles.surface3Position]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <Text style={[styles.placeholder1, styles.placeholderPosition]}>
                Trung Anh
              </Text>
              <Text style={[styles.label5, styles.labelLayout]}>
                <Text style={styles.vaiTr}>{`Tên `}</Text>
                <Text style={styles.text}>*</Text>
              </Text>
            </View>
            <View style={[styles.input5, styles.inputPosition]}>
              <View style={[styles.surface3, styles.surface3Position]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <Text style={[styles.placeholder1, styles.placeholderPosition]}>
                trunganhvu59@gmail.com
              </Text>
              <Text style={[styles.label4, styles.labelLayout]}>Email</Text>
            </View>
            <View style={[styles.input6, styles.inputPosition]}>
              <View style={[styles.surface3, styles.surface3Position]}>
                <View style={[styles.fill1, styles.fillBorder]} />
              </View>
              <Text style={[styles.placeholder1, styles.placeholderPosition]}>
                0373562881
              </Text>
              <Text style={[styles.label4, styles.labelLayout]}>
                Số điện thoại
              </Text>
            </View>
            <View style={styles.button1}>
              <Image
                style={[styles.icon5, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon181.png")}
              />
              <Text style={[styles.label3, styles.labelLayout1]}>Lưu</Text>
            </View>
          </View>
          <Pressable
            style={[styles.button2, styles.icon4Position]}
            onPress={() => navigation.navigate("MobileNgNhp")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon191.png")}
            />
            <Text
              style={[styles.label3, styles.labelLayout1]}
            >{`Đăng xuất `}</Text>
          </Pressable>
        </View>
        <View style={[styles.frameContainer, styles.frameContainerLayout]}>
          <View
            style={[styles.tableColumnWrapper, styles.frameContainerLayout]}
          >
            <View style={styles.tableColumn}>
              <View style={[styles.tableCell, styles.surface1Position]}>
                <View style={[styles.line, styles.linePosition]} />
                <Text style={[styles.label12, styles.labelPosition]}>
                  Cài đặt nâng cao
                </Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.linePosition]} />
                  <Text style={[styles.label13, styles.labelPosition]}>
                    Chấm bằng AI
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.linePosition]} />
                  <View style={[styles.checkbox, styles.labelPosition]}>
                    <View style={[styles.fill8, styles.iconLayout]} />
                    <Text style={[styles.label14, styles.labelTypo1]}>
                      Tiết kiệm
                    </Text>
                  </View>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.linePosition]} />
                  <View style={[styles.checkbox, styles.labelPosition]}>
                    <View style={[styles.fill8, styles.iconLayout]} />
                    <Text style={[styles.label14, styles.labelTypo1]}>
                      Tiêu chuẩn-GPT (mặc đinh )
                    </Text>
                  </View>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line4, styles.linePosition]} />
                  <View style={[styles.checkbox, styles.labelPosition]}>
                    <View style={[styles.fill8, styles.iconLayout]} />
                    <Text style={[styles.label14, styles.labelTypo1]}>
                      Tiêu chuẩn-Genimi
                    </Text>
                  </View>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line4, styles.linePosition]} />
                  <View style={[styles.checkbox, styles.labelPosition]}>
                    <View style={[styles.fill8, styles.iconLayout]} />
                    <Text style={[styles.label14, styles.labelTypo1]}>
                      Nâng cao
                    </Text>
                  </View>
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
  mobileLayout: {
    width: 430,
    left: 0,
  },
  groupChildPosition: {
    bottom: "0%",
    left: "0%",
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
  labelTypo2: {
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
  lpFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  component3Layout: {
    height: 35,
    marginLeft: 8,
  },
  labelTypo1: {
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  fillBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  groupChildPosition1: {
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
  labelTypo: {
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  labelPosition: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  groupItemBorder: {
    borderColor: Color.gray80,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  checkboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelLayout1: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  parentGroupLayout: {
    width: 330,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  buttonFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorDefault40,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputPosition1: {
    left: "4.85%",
    position: "absolute",
  },
  surfacePosition: {
    top: 24,
    opacity: 0.99,
    bottom: 0,
    left: 0,
  },
  placeholderPosition: {
    top: 30,
    left: 8,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    position: "absolute",
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  surface3Position: {
    right: 1,
    position: "absolute",
  },
  fillPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  icon4Position: {
    left: "50%",
    position: "absolute",
  },
  inputPosition: {
    left: "7.52%",
    right: "7.18%",
    width: "85.3%",
    height: "12.46%",
    borderColor: Color.gray80,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  frameContainerLayout: {
    height: 267,
    width: 330,
    left: 0,
    position: "absolute",
  },
  surface1Position: {
    right: 0,
    position: "absolute",
  },
  linePosition: {
    height: 1,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  component2Child: {
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
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
    justifyContent: "center",
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
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
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
    color: Color.gray70,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
  },
  fill: {
    borderRadius: Border.br_3xs,
    borderColor: Color.gray60,
    borderWidth: 1,
    backgroundColor: Color.white,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    top: 0,
  },
  surface: {
    opacity: 0.99,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholder: {
    top: 6,
    left: 40,
    color: Color.gray70,
    position: "absolute",
  },
  searchIcon: {
    top: 4,
    left: 8,
    width: 24,
    position: "absolute",
  },
  input: {
    width: 170,
    marginLeft: 8,
    height: 32,
  },
  focus: {
    borderColor: Color.blue60,
  },
  label: {
    left: 48,
    top: "50%",
    color: Color.gray20,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
    position: "absolute",
  },
  focus1: {
    borderColor: Color.white,
    display: "none",
  },
  label1: {
    width: 66,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    color: Color.gray20,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  dropdown1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    height: 32,
  },
  label2: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    flex: 1,
  },
  dropdown2: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs_5,
    alignSelf: "stretch",
    backgroundColor: Color.white,
    height: 32,
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
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    display: "none",
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
  },
  component3: {
    width: 98,
    marginLeft: 8,
  },
  mobileThanhTmKim: {
    top: 90,
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
    left: 0,
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  label3: {
    color: Color.white,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button: {
    height: "10.95%",
    width: "30.21%",
    top: "65.66%",
    right: "4.64%",
    bottom: "23.39%",
    left: "65.15%",
    position: "absolute",
  },
  fill1: {
    borderRadius: Border.br_11xs,
    borderColor: Color.gray60,
    borderWidth: 1,
    backgroundColor: Color.white,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    top: 0,
  },
  surface1: {
    right: 0,
    position: "absolute",
  },
  placeholder1: {
    color: Color.gray60,
  },
  label4: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input1: {
    height: "19.05%",
    width: "90.3%",
    top: "37.76%",
    right: "4.85%",
    bottom: "43.19%",
  },
  fill3: {
    borderRadius: Border.br_11xs,
    top: 0,
    backgroundColor: Color.gray90,
    bottom: 0,
  },
  icon4: {
    marginTop: -11.5,
    marginLeft: -12,
    top: "50%",
    height: 24,
    width: 24,
  },
  dropdown3: {
    top: 25,
    bottom: 1,
    borderColor: Color.colorDarkviolet,
    width: 30,
    borderWidth: 1,
    borderStyle: "solid",
  },
  placeholder2: {
    color: Color.gray70,
  },
  vaiTr: {
    color: Color.gray10,
  },
  text: {
    color: Color.red40,
  },
  label5: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input2: {
    height: "19.38%",
    width: "90.91%",
    top: "14.64%",
    right: "4.24%",
    bottom: "65.99%",
  },
  rectangleGroup: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupWrapper: {
    top: 492,
    height: 304,
    left: 0,
  },
  groupItem: {
    borderColor: Color.gray80,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  surface3: {
    top: 24,
    opacity: 0.99,
    bottom: 0,
    left: 0,
  },
  input3: {
    top: "12.04%",
    bottom: "75.5%",
  },
  input4: {
    top: "30.28%",
    bottom: "57.26%",
  },
  input5: {
    top: "48.54%",
    bottom: "39%",
  },
  input6: {
    top: "66.8%",
    bottom: "20.74%",
  },
  icon5: {
    display: "none",
  },
  button1: {
    height: "7.11%",
    width: "19.94%",
    top: "83.48%",
    right: "72.48%",
    bottom: "9.41%",
    left: "7.58%",
    padding: 24,
    backgroundColor: Color.primaryColorDefault40,
    borderRadius: Border.br_9xs,
    borderColor: Color.gray80,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  button2: {
    height: "6.96%",
    marginLeft: 31,
    top: "83.7%",
    bottom: "9.35%",
    width: 110,
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorDefault40,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent: {
    height: 460,
    left: 0,
    top: 0,
  },
  line: {
    backgroundColor: Color.white,
  },
  label12: {
    color: Color.gray10,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  tableCell: {
    backgroundColor: Color.white,
    height: 32,
    left: 0,
    top: 0,
  },
  label13: {
    marginTop: -10.1,
    width: 265,
    color: Color.gray10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  tableCell1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    flex: 1,
  },
  fill8: {
    borderRadius: Border.br_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.gray60,
    backgroundColor: Color.white,
  },
  label14: {
    marginLeft: 8,
    color: Color.gray20,
  },
  checkbox: {
    marginTop: -12.1,
    alignItems: "center",
    flexDirection: "row",
  },
  line4: {
    backgroundColor: Color.gray80,
  },
  tableCellParent: {
    top: 32,
  },
  tableColumn: {
    top: 19,
    left: 22,
    width: 296,
    height: 213,
    position: "absolute",
  },
  tableColumnWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    top: 0,
    overflow: "hidden",
  },
  frameContainer: {
    top: 828,
  },
  frameParent: {
    top: 180,
    left: 50,
    height: 679,
  },
  iphone1415ProMax9: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.gray90,
  },
});

export default IPhone1415ProMax;
