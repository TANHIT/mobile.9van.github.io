import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const MobileChnhS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileChnhS}>
      <View style={[styles.component2, styles.mobileLayout]}>
        <View style={[styles.component2Child, styles.modalPosition]} />
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
              source={require("../assets/datadata-outline1.png")}
            />
            <Text style={[styles.luyn, styles.labelLayout1]}>Luyện đề</Text>
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
      <View style={[styles.mobileThanhTmKim, styles.buttonClr]}>
        <Text style={[styles.lpHc1, styles.lpFlexBox]}>{`Đề của tôi `}</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={[styles.surface, styles.linePosition]}>
            <View style={[styles.fill, styles.fillBorder]} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.modalPosition1]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={[styles.label, styles.iconPosition1]}>
                  Lớp học
                </Text>
                <Image
                  style={[styles.icon2, styles.labelPosition1]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.fill1Border]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focusPosition]} />
                <Text style={[styles.label1, styles.labelPosition1]}>
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
      <View style={[styles.ring, styles.fillLayout]}>
        <View style={[styles.tableColumn, styles.tablePosition]}>
          <View style={[styles.tableCell, styles.modal1Position]}>
            <View style={[styles.line, styles.lineBg]} />
            <Text style={[styles.label3, styles.labelTypo]}>Khối</Text>
          </View>
          <View style={[styles.tableCellParent, styles.linePosition]}>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label4, styles.labelTypo]}>Đề bài</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label4, styles.labelTypo]}>
                Câu hỏi chấm
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label4, styles.labelTypo]}>Đã giao</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label4, styles.labelTypo]}>Ngày tạo</Text>
            </View>
            <View style={styles.tableCell5}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label8, styles.labelPosition1]}>
                Table label
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.tableColumn1, styles.tablePosition]}>
          <View style={[styles.tableCell, styles.modal1Position]}>
            <View style={[styles.line, styles.lineBg]} />
            <Text style={[styles.label9, styles.labelPosition]}>9</Text>
          </View>
          <View style={[styles.tableCellParent, styles.linePosition]}>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text
                style={[styles.label10, styles.labelPosition]}
              >{`văn học nghệ thuật đương đại `}</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label10, styles.labelPosition]}>
                Quê hương em ở đâu?
              </Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label10, styles.labelPosition]}>9 A13</Text>
            </View>
            <View style={styles.tableCell1}>
              <View style={[styles.line, styles.lineBg]} />
              <Text
                style={[styles.label10, styles.labelPosition]}
              >{`25/12/2023  11:30 `}</Text>
            </View>
            <View style={styles.tableCell5}>
              <View style={[styles.line, styles.lineBg]} />
              <Text style={[styles.label8, styles.labelPosition1]}>
                Table label
              </Text>
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
          onPress={() => navigation.navigate("MobileXa")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/3-icon.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhS")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon51.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition1]}
          onPress={() => navigation.navigate("MobileGiao")}
        >
          <Image
            style={[styles.icon9, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/1-icon.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.modalElementsScreen, styles.fillBorder]}>
        <View style={[styles.rectangle, styles.lineBg]} />
      </View>
      <View style={[styles.chnhSaBi, styles.modalPosition1]}>
        <View style={[styles.modal, styles.modalPosition]}>
          <View style={[styles.modal1, styles.modal1Position]}>
            <Image
              style={[styles.fillIcon, styles.footerPosition]}
              resizeMode="cover"
              source={require("../assets/fill21.png")}
            />
            <Pressable
              style={[styles.icon10, styles.icon10Position]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon21.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.footer, styles.footerPosition]}>
            <View style={[styles.buttonParent, styles.icon12Layout]}>
              <Pressable
                style={[styles.button, styles.buttonLayout]}
                onPress={() => navigation.goBack()}
              >
                <Text style={[styles.label15, styles.labelLayout1]}>Hủy</Text>
              </Pressable>
              <Pressable
                style={[styles.button1, styles.buttonLayout]}
                onPress={() => navigation.navigate("MobileThnhCng1")}
              >
                <Text style={[styles.label16, styles.labelLayout1]}>Lưu</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.titleParent}>
            <Text style={[styles.title, styles.labelTypo2]}>
              Chỉnh sửa đề bài
            </Text>
            <Text style={[styles.subtitle, styles.label8Typo]}>
              Hãy điền đầy đủ thông tin
            </Text>
          </View>
          <Image
            style={[styles.icon12, styles.icon12Layout]}
            resizeMode="cover"
            source={require("../assets/icon61.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputPosition]}>
          <Text style={[styles.counter, styles.label8Typo]}>200/200 câu</Text>
          <View style={[styles.surface1, styles.surface1Position]}>
            <View style={[styles.fill1, styles.fill1Border]} />
          </View>
          <Image
            style={[styles.textFieldElementsResi, styles.surface1Position]}
            resizeMode="cover"
            source={require("../assets/text-field---elements--resize.png")}
          />
          <Image
            style={[styles.icon13, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon71.png")}
          />
          <Text
            style={[styles.input2, styles.input2Position]}
          >{`Văn học dan gian cổ đại xưa kia yêu hòa bình , yêu đắt nước , yếu dân tộc, anh em  một nhà , gia đinh `}</Text>
          <Image
            style={[styles.richTextBar, styles.surface1Position1]}
            resizeMode="cover"
            source={require("../assets/rich-text-bar.png")}
          />
          <Text style={[styles.label17, styles.labelLayout]}>Đề bài</Text>
        </View>
        <View style={[styles.input3, styles.inputPosition]}>
          <Text style={[styles.counter, styles.label8Typo]}>200/200 câu</Text>
          <View style={[styles.surface1, styles.surface1Position]}>
            <View style={[styles.fill1, styles.fill1Border]} />
          </View>
          <Image
            style={[styles.textFieldElementsResi, styles.surface1Position]}
            resizeMode="cover"
            source={require("../assets/text-field---elements--resize.png")}
          />
          <Image
            style={[styles.icon13, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon71.png")}
          />
          <Text style={[styles.input2, styles.input2Position]}>
            quê hương là gì ?dân tộc là gì ?đất nước là gì ?
          </Text>
          <Image
            style={[styles.richTextBar, styles.surface1Position1]}
            resizeMode="cover"
            source={require("../assets/rich-text-bar.png")}
          />
          <Text style={[styles.label17, styles.labelLayout]}>
            Câu hỏi chấm điểm
          </Text>
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
  modalPosition: {
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
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
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
  labelLayout1: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  buttonClr: {
    borderColor: Color.colorDimgray,
    backgroundColor: Color.white,
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
  },
  fillBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  modalPosition1: {
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
  iconPosition1: {
    top: "50%",
    position: "absolute",
  },
  labelPosition1: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  fill1Border: {
    borderRadius: Border.br_11xs,
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
  fillLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  tablePosition: {
    height: 301,
    top: 21,
    position: "absolute",
  },
  modal1Position: {
    left: 0,
    top: 0,
  },
  lineBg: {
    backgroundColor: Color.gray80,
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
    width: 216,
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
    bottom: "7.5%",
    top: "85%",
    width: "8.33%",
    height: "7.5%",
  },
  iconSpaceBlock: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  footerPosition: {
    borderRadius: Border.br_9xs,
    bottom: 1,
    position: "absolute",
  },
  icon10Position: {
    right: 16,
    top: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  icon12Layout: {
    height: 48,
    position: "absolute",
  },
  buttonLayout: {
    paddingVertical: Padding.p_sm_5,
    width: 144,
    height: 48,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label8Typo: {
    fontFamily: FontFamily.h5Regular,
    color: Color.gray10,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  inputPosition: {
    left: "13.72%",
    right: "9.53%",
    width: "76.74%",
    height: "25%",
    position: "absolute",
  },
  surface1Position: {
    bottom: 24,
    right: 0,
    position: "absolute",
  },
  input2Position: {
    left: 8,
    position: "absolute",
  },
  surface1Position1: {
    top: 24,
    left: 0,
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
    height: 46,
    width: 48,
  },
  van: {
    color: Color.stroke2nd,
    marginLeft: 16,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    fontWeight: "700",
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
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  surface: {
    opacity: 0.99,
    top: 0,
    position: "absolute",
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
  },
  label: {
    left: 48,
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
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
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_base,
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
    display: "none",
  },
  component3: {
    width: 98,
    marginLeft: 8,
  },
  mobileThanhTmKim: {
    top: 90,
    borderTopWidth: 1,
    height: 70,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: 430,
    left: 0,
  },
  line: {
    height: 1,
    bottom: 0,
    right: 0,
    left: 0,
  },
  label3: {
    marginTop: -10,
  },
  tableCell: {
    right: 0,
    backgroundColor: Color.white,
    height: 32,
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
    marginTop: -10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  tableCell5: {
    alignSelf: "stretch",
    display: "none",
    backgroundColor: Color.white,
    flex: 1,
  },
  tableCellParent: {
    top: 32,
    position: "absolute",
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
    width: 247,
  },
  icon3: {
    right: "55.51%",
    left: "36.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  icon4: {
    left: "71.54%",
    right: "20.13%",
    position: "absolute",
  },
  icon6: {
    right: "37.82%",
    left: "53.85%",
    bottom: "7.5%",
    top: "85%",
    width: "8.33%",
    height: "7.5%",
    alignItems: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  icon9: {
    marginTop: 140,
  },
  icon8: {
    right: 287,
    width: 30,
    height: 30,
  },
  ring: {
    top: 184,
    left: 20,
    width: 390,
    height: 400,
    overflow: "hidden",
  },
  rectangle: {
    opacity: 0.7,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  modalElementsScreen: {
    borderColor: Color.colorDarkviolet,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  fillIcon: {
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  icon10: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    position: "absolute",
    height: 32,
  },
  modal1: {
    bottom: -1,
    right: 0,
    position: "absolute",
  },
  label15: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    backgroundColor: Color.white,
  },
  label16: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button1: {
    backgroundColor: Color.primaryColorDefault40,
    marginLeft: 16,
  },
  buttonParent: {
    width: 304,
    right: 16,
    top: 16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  footer: {
    right: 1,
    left: 1,
    height: 80,
    backgroundColor: Color.gray90,
    bottom: 1,
  },
  title: {
    color: Color.gray10,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    fontWeight: "700",
  },
  subtitle: {
    color: Color.gray10,
    textAlign: "left",
  },
  titleParent: {
    top: 46,
    right: 48,
    left: 104,
    position: "absolute",
  },
  icon12: {
    top: 40,
    left: 40,
    width: 48,
  },
  modal: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  counter: {
    bottom: 4,
    textAlign: "right",
    color: Color.gray10,
    right: 0,
    position: "absolute",
  },
  fill1: {
    borderColor: Color.gray60,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  surface1: {
    top: 24,
    left: 0,
    opacity: 0.99,
  },
  textFieldElementsResi: {
    width: 9,
    height: 9,
  },
  icon13: {
    marginTop: -16,
    right: 8,
    height: 24,
    width: 24,
  },
  input2: {
    top: 60,
    width: 282,
    color: Color.gray10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  richTextBar: {
    right: 0,
    height: 32,
    maxWidth: "100%",
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  label17: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input1: {
    top: "25%",
    bottom: "50%",
  },
  input3: {
    top: "54.38%",
    bottom: "20.63%",
  },
  chnhSaBi: {
    height: "68.67%",
    top: "13.63%",
    bottom: "17.7%",
    left: "0%",
    position: "absolute",
  },
  mobileChnhS: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.gray90,
  },
});

export default MobileChnhS;
