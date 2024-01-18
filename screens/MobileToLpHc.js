import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MobileToLpHc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileToLpHc}>
      <View style={[styles.component2, styles.labelPosition]}>
        <View style={[styles.component2Child, styles.mobileThanhTcVBg]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1415ProMax")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/rectangle-339.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone1415ProMax1")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.mobileFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-337.png")}
          />
          <Text style={[styles.van, styles.labelTypo2]}>9 VAN</Text>
        </View>
      </View>
      <View style={[styles.mobileThanhTcV, styles.mobileFlexBox]}>
        <Pressable
          style={styles.constructionhouseOutlineParent}
          onPress={() => navigation.navigate("MobileTngQuan")}
        >
          <Image
            style={[styles.constructionhouseOutlineIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/constructionhouse-outline2.png")}
          />
          <Text style={[styles.tngQuan, styles.luynTypo]}>Tổng quan</Text>
        </Pressable>
        <Pressable
          style={[
            styles.usermultipleUsersOutlineParent,
            styles.mobileThanhTcVInnerFlexBox,
          ]}
          onPress={() => navigation.navigate("MobileLpHcHinTi")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/usermultiple-users-outline11.png")}
          />
          <Text style={[styles.lpHc, styles.labelLayout1]}>Lớp học</Text>
        </Pressable>
        <Pressable
          style={styles.mobileThanhTcVInnerFlexBox}
          onPress={() => navigation.navigate("MobileBiCaTi")}
        >
          <View style={styles.datadataOutlineParent}>
            <Image
              style={[styles.datadataOutlineIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/datadata-outline21.png")}
            />
            <Text style={[styles.luyn, styles.luynTypo]}>Luyện đề</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.mobileThanhTcVInnerFlexBox}
          onPress={() => navigation.navigate("MobileBiTp")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/file-systemfile-with-itens-outline2.png")}
          />
          <Text style={styles.luynTypo}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={[styles.mobileLpHc, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/3-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon101.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon21.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.labelTypo1]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.hcSinhTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
      </View>
      <View style={[styles.mobileThanhTmKim, styles.buttonBorder]}>
        <Text
          style={[styles.lpHc1, styles.labelLayout]}
        >{`Lớp học hoạt động `}</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={styles.surface}>
            <View style={[styles.fill, styles.fillLayout]} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.input3Position]}
            resizeMode="cover"
            source={require("../assets/search-icon11.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.rectanglePosition]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={[styles.label1, styles.labelIconPosition]}>
                  Lớp học
                </Text>
                <Image
                  style={[styles.icon12, styles.icon12Position]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.focus1Border]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focus1Border]} />
                <Text style={[styles.label2, styles.icon12Position]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={styles.dropdown2}>
                    <Text style={[styles.label3, styles.labelTypo1]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mobileLpHc1, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/3-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon101.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon21.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.labelTypo1]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.hcSinhTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
      </View>
      <View style={[styles.mobileLpHc2, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/3-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon101.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/2-icon21.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.labelTypo1]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.hcSinhTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
      </View>
      <View style={[styles.modalElementsScreen, styles.dropdown3Border]}>
        <View style={[styles.rectangle, styles.rectangleParentPosition]} />
      </View>
      <View style={[styles.modalParent, styles.rectangleParentPosition]}>
        <View style={[styles.modalParent, styles.rectangleParentPosition]}>
          <View style={styles.modal1}>
            <Image
              style={styles.fillIcon}
              resizeMode="cover"
              source={require("../assets/fill41.png")}
            />
            <View style={[styles.icon33, styles.icon33Position]}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/icon21.png")}
              />
            </View>
          </View>
          <View style={[styles.footer, styles.footerPosition]}>
            <View style={[styles.buttonParent, styles.buttonLayout1]}>
              <Pressable
                style={[styles.button, styles.buttonLayout]}
                onPress={() => navigation.goBack()}
              >
                <Text style={[styles.label6, styles.labelLayout1]}>Hủy</Text>
              </Pressable>
              <Pressable
                style={[styles.button1, styles.buttonLayout]}
                onPress={() => navigation.navigate("MobileThnhCng3")}
              >
                <Text style={[styles.label7, styles.labelLayout1]}>
                  Tạo lớp
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.titleParent}>
            <Text style={[styles.title, styles.titleLayout]}>Tạo lớp học</Text>
            <Text style={[styles.subtitle, styles.titleLayout]}>
              hãy điền đầy đủ thông tin
            </Text>
          </View>
          <Image
            style={[styles.icon35, styles.buttonLayout1]}
            resizeMode="cover"
            source={require("../assets/icon61.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputPosition1]}>
          <Text style={[styles.counter, styles.counterTypo]}>0/200 câu</Text>
          <View style={[styles.surface1, styles.surface1Position]}>
            <View style={[styles.fill1, styles.fillLayout]} />
          </View>
          <Image
            style={[styles.textFieldElementsResi, styles.surface1Position]}
            resizeMode="cover"
            source={require("../assets/text-field---elements--resize21.png")}
          />
          <Text style={[styles.placeholder1, styles.placeholderTypo]}>
            học hành là quan trọng là tiềm năng , là mệt mỏi , là chán đời , là
            linh tinh ,...
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>{`Mô tả `}</Text>
        </View>
        <View style={[styles.input2, styles.inputPosition1]}>
          <View style={[styles.surface1, styles.surface1Position]}>
            <View style={[styles.fill1, styles.fillLayout]} />
          </View>
          <Text style={styles.counterTypo}>200/200 câu</Text>
          <Image
            style={[styles.textFieldElementsResi, styles.surface1Position]}
            resizeMode="cover"
            source={require("../assets/text-field---elements--resize31.png")}
          />
          <Image
            style={[styles.icon36, styles.labelIconPosition]}
            resizeMode="cover"
            source={require("../assets/icon121.png")}
          />
          <Text style={[styles.input3, styles.input3Position]}>
            Gõ hoặc dán email học sinh, phân cách nhiều email bằng dấu phẩy và
            ấn enter
          </Text>
          <Text style={[styles.label9, styles.labelLayout]}>
            <Text style={styles.danhSchSinh}>{`Danh sách sinh viên `}</Text>
            <Text style={styles.text}>*</Text>
          </Text>
        </View>
        <View style={[styles.input4, styles.inputPosition]}>
          <View style={[styles.surface3, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillLayout]} />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderTypo]}>
            9 A13
          </Text>
          <Text style={[styles.label9, styles.labelLayout]}>
            <Text style={styles.danhSchSinh}>{`Lớp `}</Text>
            <Text style={styles.text}>*</Text>
          </Text>
        </View>
        <View style={[styles.dateInput, styles.inputPosition]}>
          <View style={[styles.surface3, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillLayout]} />
          </View>
          <View style={[styles.dropdown3, styles.footerPosition]}>
            <View style={[styles.fill5, styles.fill5Position]} />
            <Image
              style={[styles.icon37, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon131.png")}
            />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderTypo]}>
            20/01/2002
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>Ngày bắt đầu</Text>
        </View>
        <View style={[styles.dateInput1, styles.inputPosition]}>
          <View style={[styles.surface3, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillLayout]} />
          </View>
          <View style={[styles.dropdown3, styles.footerPosition]}>
            <View style={[styles.fill5, styles.fill5Position]} />
            <Image
              style={[styles.icon37, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon141.png")}
            />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderTypo]}>
            30/01/2002
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>Ngày hết hạn</Text>
        </View>
        <View style={[styles.fileUploaderSmallLink, styles.inputPosition1]}>
          <View style={[styles.button2, styles.buttonLayout1]}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/arrowsupload.png")}
            />
            <Text style={[styles.label13, styles.labelTypo1]}>
              Chọn tập tin
            </Text>
          </View>
          <Text
            style={[styles.linkLabel, styles.labelIconPosition]}
          >{`Tải xuống `}</Text>
          <Text style={[styles.label14, styles.labelIconPosition]}>
            Tài liệu học sinh
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelPosition: {
    top: 0,
    left: 0,
  },
  mobileThanhTcVBg: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mobileFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo2: {
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  luynTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  mobileThanhTcVInnerFlexBox: {
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  labelLayout1: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  mobileLayout: {
    height: 170,
    width: 380,
    left: 25,
    position: "absolute",
  },
  iconPosition: {
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
  },
  iconSpaceBlock: {
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
  lp9APosition: {
    top: "5.94%",
    height: "19.06%",
    alignItems: "center",
    position: "absolute",
  },
  labelTypo1: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  hcSinhTypo: {
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  buttonBorder: {
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
  fillLayout: {
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  input3Position: {
    left: 8,
    position: "absolute",
  },
  rectanglePosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  focusPosition: {
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderWidth: 2,
  },
  labelIconPosition: {
    top: "50%",
    position: "absolute",
  },
  icon12Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  focus1Border: {
    display: "none",
    borderStyle: "solid",
    position: "absolute",
  },
  dropdown3Border: {
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangleParentPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  icon33Position: {
    right: 16,
    top: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  footerPosition: {
    right: 1,
    bottom: 1,
    position: "absolute",
  },
  buttonLayout1: {
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
  titleLayout: {
    width: 351,
    color: Color.gray10,
    textAlign: "left",
  },
  inputPosition1: {
    left: "10.35%",
    right: "10.33%",
    width: "79.33%",
    position: "absolute",
  },
  counterTypo: {
    textAlign: "right",
    bottom: 4,
    right: 0,
    color: Color.gray10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    position: "absolute",
  },
  surface1Position: {
    bottom: 24,
    right: 0,
    position: "absolute",
  },
  placeholderTypo: {
    color: Color.gray60,
    left: 8,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    position: "absolute",
  },
  inputPosition: {
    height: "5.83%",
    left: "10.35%",
    right: "10.33%",
    width: "79.33%",
    position: "absolute",
  },
  surfacePosition: {
    top: 24,
    opacity: 0.99,
    left: 0,
  },
  fill5Position: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  iconLayout: {
    marginTop: -12,
    height: 24,
    width: 24,
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
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    fontWeight: "700",
  },
  rectangleParent: {
    width: "31.63%",
    right: "68.37%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  component2: {
    height: 90,
    width: 430,
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
  lpHc: {
    color: Color.blue50,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  usermultipleUsersOutlineParent: {
    backgroundColor: Color.white,
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
    backgroundColor: Color.colorGray_100,
    position: "absolute",
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  mobileLpHcChild: {
    borderColor: Color.gray90,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon2: {
    left: "83.29%",
    right: "8.76%",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  icon4: {
    right: "36.08%",
    left: "55.97%",
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  icon6: {
    right: "49.87%",
    left: "42.18%",
  },
  icon8: {
    left: "69.76%",
    right: "22.29%",
  },
  label: {
    marginLeft: 8,
    color: Color.green70,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  icon10: {
    width: "24.66%",
    right: "4.66%",
    bottom: "75%",
    left: "70.68%",
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  lp9A: {
    width: "20.95%",
    fontSize: FontSize.h3Bold_size,
    lineHeight: 24,
    display: "flex",
    top: "5.94%",
    height: "19.06%",
    alignItems: "center",
    position: "absolute",
    left: "42.18%",
  },
  image15Icon: {
    height: "59.53%",
    width: "25.13%",
    top: "19.06%",
    right: "66.66%",
    bottom: "21.41%",
    left: "8.21%",
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vnHcNgh: {
    width: "45.89%",
    top: "28.59%",
    color: Color.gray10,
    height: "11.88%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    left: "42.18%",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  hcSinh: {
    width: "23.34%",
    top: "45.24%",
    height: "11.88%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    left: "42.18%",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    color: Color.green70,
  },
  mobileLpHc: {
    top: 210,
  },
  lpHc1: {
    width: 70,
    height: 39,
    display: "flex",
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    alignItems: "center",
  },
  mobileThanhTmKimChild: {
    borderColor: Color.colorSilver,
    borderRightWidth: 2,
    width: 2,
    borderStyle: "solid",
  },
  lp: {
    width: 34,
    height: 20,
    display: "flex",
    marginLeft: 8,
    alignItems: "center",
  },
  fill: {
    borderRadius: Border.br_3xs,
    borderColor: Color.gray60,
    borderWidth: 1,
    bottom: 0,
    right: 0,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
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
    position: "absolute",
  },
  searchIcon: {
    top: 4,
    height: 24,
    width: 24,
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
  label1: {
    left: 48,
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  icon12: {
    marginTop: -12,
    height: 24,
    width: 24,
  },
  dropdown: {
    width: 98,
    height: 32,
    backgroundColor: Color.white,
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
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderWidth: 2,
  },
  label2: {
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
    height: 32,
    backgroundColor: Color.white,
  },
  label3: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
  },
  dropdown2: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    height: 32,
    backgroundColor: Color.white,
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
    borderRadius: Border.br_11xs,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  component3: {
    width: 98,
  },
  mobileThanhTmKim: {
    top: 90,
    borderTopWidth: 1,
    height: 70,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    left: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    position: "absolute",
  },
  mobileLpHc1: {
    top: 430,
  },
  mobileLpHc2: {
    top: 650,
  },
  rectangle: {
    backgroundColor: Color.gray80,
    opacity: 0.7,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  modalElementsScreen: {
    right: "-0.23%",
    left: "0.23%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  fillIcon: {
    borderRadius: Border.br_9xs,
    bottom: 1,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon33: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 32,
    position: "absolute",
  },
  modal1: {
    bottom: -1,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label6: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button: {
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
  },
  label7: {
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
    height: 80,
    borderRadius: Border.br_9xs,
    left: 1,
    backgroundColor: Color.gray90,
  },
  title: {
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
  },
  subtitle: {
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    display: "flex",
    alignItems: "center",
  },
  titleParent: {
    top: 46,
    right: 48,
    left: 104,
    position: "absolute",
  },
  icon35: {
    top: 40,
    left: 40,
    width: 48,
  },
  modalParent: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  counter: {
    alignItems: "flex-end",
    width: 101,
    display: "flex",
  },
  fill1: {
    borderRadius: Border.br_11xs,
    borderColor: Color.gray60,
    borderWidth: 1,
    bottom: 0,
    right: 0,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  surface1: {
    top: 24,
    opacity: 0.99,
    left: 0,
  },
  textFieldElementsResi: {
    width: 9,
    height: 9,
  },
  placeholder1: {
    width: 325,
    top: 28,
  },
  label8: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input1: {
    top: "23.83%",
    bottom: "62.85%",
    height: "13.32%",
    left: "10.35%",
    right: "10.33%",
    width: "79.33%",
  },
  icon36: {
    marginTop: -32.05,
    right: 8,
    height: 24,
    width: 24,
  },
  input3: {
    width: 293,
    top: 28,
    color: Color.gray10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  danhSchSinh: {
    color: Color.gray10,
  },
  text: {
    color: Color.red40,
  },
  label9: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input2: {
    top: "71.7%",
    bottom: "14.99%",
    height: "13.32%",
    left: "10.35%",
    right: "10.33%",
    width: "79.33%",
  },
  surface3: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  placeholder2: {
    top: 30,
  },
  input4: {
    top: "14.77%",
    bottom: "79.4%",
  },
  fill5: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
    backgroundColor: Color.gray90,
  },
  icon37: {
    marginLeft: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  dropdown3: {
    top: 25,
    width: 30,
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  dateInput: {
    top: "40.38%",
    bottom: "53.8%",
  },
  dateInput1: {
    top: "49.43%",
    bottom: "44.74%",
  },
  label13: {
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  button2: {
    top: 48,
    right: 103,
    left: 95,
    padding: Padding.p_base,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  linkLabel: {
    marginTop: -27.55,
    textDecoration: "underline",
    color: Color.primaryColorDefault40,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: "0%",
  },
  label14: {
    marginTop: -47.55,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: "0%",
  },
  fileUploaderSmallLink: {
    height: "9.99%",
    top: "58.48%",
    bottom: "31.53%",
  },
  mobileToLpHc: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.gray90,
  },
});

export default MobileToLpHc;
