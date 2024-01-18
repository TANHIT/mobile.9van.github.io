import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const MobileBiTp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileBiTp}>
      <View style={[styles.component2, styles.component2Position]}>
        <View
          style={[styles.component2Child, styles.component2ChildPosition]}
        />
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
            <Text style={[styles.luyn, styles.luynTypo]}>Luyện đề</Text>
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
            source={require("../assets/file-systemfile-with-itens-outline1.png")}
          />
          <Text style={[styles.biTp, styles.labelLayout]}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={[styles.mobileThanhTmKim, styles.mobileParentFlexBox]}>
        <Text style={[styles.lpHc1, styles.lpFlexBox]}>Bài tập</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={[styles.surface, styles.fillPosition]}>
            <View style={[styles.fill, styles.fillLayout]} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View
            style={[styles.component3Inner, styles.component2ChildPosition1]}
          >
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
                    <Text style={[styles.label2, styles.luynTypo]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.instanceParent}>
        <View style={styles.groupViewLayout}>
          <View style={[styles.tableColumnParent, styles.fillLayout1]}>
            <View style={[styles.tableColumn, styles.tableLayout1]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={[styles.label3, styles.labelPosition1]}>STT</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label4, styles.labelPosition1]}>
                    Thông tin
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label4, styles.labelPosition1]}
                  >{`Đề bài `}</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Lớp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Đã nộp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label3, styles.labelPosition1]}
                  >{`Bài đã chấm `}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell6, styles.tablePosition]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text
                style={[styles.label3, styles.labelPosition1]}
              >{`Hạn nộp bài `}</Text>
            </View>
            <View style={[styles.tableColumn1, styles.tableLayout]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={styles.label10}>1</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    <Text style={styles.labelTxt}>
                      {`Bài giao cho lớp `}04/01/2024 15:55
                    </Text>
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    Bàn luận về hiện tượng bạo lực học đường
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>9 A3</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>12</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>8</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell13, styles.tableLayout]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text style={styles.labelPosition}>
                <Text style={styles.labelTxt}>
                  <Text style={styles.text}>{`11/01/2024  23:59
`}</Text>
                  <Text style={styles.cnLi8}>Còn lại 8 giờ 56 phút</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.button, styles.mobileParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon30.png")}
              />
              <Text style={[styles.label17, styles.labelLayout]}>Thu hồi</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.tableColumnParent, styles.fillLayout1]}>
            <View style={[styles.tableColumn, styles.tableLayout1]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={[styles.label3, styles.labelPosition1]}>STT</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label4, styles.labelPosition1]}>
                    Thông tin
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label4, styles.labelPosition1]}
                  >{`Đề bài `}</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Lớp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Đã nộp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label3, styles.labelPosition1]}
                  >{`Bài đã chấm `}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell6, styles.tablePosition]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text
                style={[styles.label3, styles.labelPosition1]}
              >{`Hạn nộp bài `}</Text>
            </View>
            <View style={[styles.tableColumn1, styles.tableLayout]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={styles.label10}>1</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    <Text style={styles.labelTxt}>
                      {`Bài giao cho lớp `}04/01/2024 15:55
                    </Text>
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    Bàn luận về hiện tượng bạo lực học đường
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>9 A3</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>12</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>8</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell13, styles.tableLayout]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text style={styles.labelPosition}>
                <Text style={styles.labelTxt}>
                  <Text style={styles.text}>{`11/01/2024  23:59
`}</Text>
                  <Text style={styles.cnLi8}>Còn lại 8 giờ 56 phút</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.button, styles.mobileParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon30.png")}
              />
              <Text style={[styles.label17, styles.labelLayout]}>Thu hồi</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.tableColumnParent, styles.fillLayout1]}>
            <View style={[styles.tableColumn, styles.tableLayout1]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={[styles.label3, styles.labelPosition1]}>STT</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label4, styles.labelPosition1]}>
                    Thông tin
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label4, styles.labelPosition1]}
                  >{`Đề bài `}</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Lớp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Đã nộp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label3, styles.labelPosition1]}
                  >{`Bài đã chấm `}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell6, styles.tablePosition]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text
                style={[styles.label3, styles.labelPosition1]}
              >{`Hạn nộp bài `}</Text>
            </View>
            <View style={[styles.tableColumn1, styles.tableLayout]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={styles.label10}>1</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    <Text style={styles.labelTxt}>
                      {`Bài giao cho lớp `}04/01/2024 15:55
                    </Text>
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    Bàn luận về hiện tượng bạo lực học đường
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>9 A3</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>12</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>8</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell13, styles.tableLayout]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text style={styles.labelPosition}>
                <Text style={styles.labelTxt}>
                  <Text style={styles.text}>{`11/01/2024  23:59
`}</Text>
                  <Text style={styles.cnLi8}>Còn lại 8 giờ 56 phút</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.button, styles.mobileParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon30.png")}
              />
              <Text style={[styles.label17, styles.labelLayout]}>Thu hồi</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.tableColumnParent, styles.fillLayout1]}>
            <View style={[styles.tableColumn, styles.tableLayout1]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={[styles.label3, styles.labelPosition1]}>STT</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label4, styles.labelPosition1]}>
                    Thông tin
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label4, styles.labelPosition1]}
                  >{`Đề bài `}</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Lớp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label3, styles.labelPosition1]}>
                    Đã nộp
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text
                    style={[styles.label3, styles.labelPosition1]}
                  >{`Bài đã chấm `}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell6, styles.tablePosition]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text
                style={[styles.label3, styles.labelPosition1]}
              >{`Hạn nộp bài `}</Text>
            </View>
            <View style={[styles.tableColumn1, styles.tableLayout]}>
              <View style={styles.tableCell}>
                <View style={[styles.line, styles.fillPosition]} />
                <Text style={styles.label10}>1</Text>
              </View>
              <View style={[styles.tableCellParent, styles.fillPosition]}>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    <Text style={styles.labelTxt}>
                      {`Bài giao cho lớp `}04/01/2024 15:55
                    </Text>
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={[styles.label11, styles.labelPosition]}>
                    Bàn luận về hiện tượng bạo lực học đường
                  </Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>9 A3</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>12</Text>
                </View>
                <View style={styles.tableCell1}>
                  <View style={[styles.line, styles.fillPosition]} />
                  <Text style={styles.label10}>8</Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableCell13, styles.tableLayout]}>
              <View style={[styles.line, styles.fillPosition]} />
              <Text style={styles.labelPosition}>
                <Text style={styles.labelTxt}>
                  <Text style={styles.text}>{`11/01/2024  23:59
`}</Text>
                  <Text style={styles.cnLi8}>Còn lại 8 giờ 56 phút</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.button, styles.mobileParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon30.png")}
              />
              <Text style={[styles.label17, styles.labelLayout]}>Thu hồi</Text>
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
  component2ChildPosition: {
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
  luynTypo: {
    color: Color.gray20,
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
  fillPosition: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  fillLayout: {
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  component2ChildPosition1: {
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
  fillLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  tableLayout1: {
    height: 232,
    top: 10,
  },
  labelPosition1: {
    width: 106,
    color: Color.gray10,
    left: 16,
    top: "50%",
    marginTop: -10,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  tablePosition: {
    height: 40,
    left: "50%",
    marginTop: 62,
    top: "50%",
    backgroundColor: Color.white,
  },
  tableLayout: {
    width: 228,
    position: "absolute",
  },
  labelPosition: {
    marginTop: -19,
    width: 197,
    textAlign: "right",
    color: Color.gray10,
    left: 16,
    top: "50%",
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    alignItems: "center",
    position: "absolute",
  },
  groupViewLayout: {
    height: 380,
    width: 390,
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
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    left: "0%",
    position: "absolute",
  },
  datadataOutlineParent: {
    width: 59,
    height: 52,
  },
  biTp: {
    color: Color.blue50,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
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
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    color: Color.gray20,
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
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
  },
  fill: {
    borderColor: Color.gray60,
    borderRadius: Border.br_3xs,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderStyle: "solid",
    top: 0,
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
    borderStyle: "solid",
    position: "absolute",
  },
  label: {
    left: 48,
    top: "50%",
    marginTop: -10,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    color: Color.gray20,
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
  line: {
    backgroundColor: Color.gray80,
    height: 1,
    position: "absolute",
  },
  label3: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  tableCell1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    flex: 1,
  },
  tableCellParent: {
    top: 32,
    position: "absolute",
  },
  tableColumn: {
    left: 12,
    width: 137,
    position: "absolute",
  },
  tableCell6: {
    marginLeft: -183,
    width: 137,
    position: "absolute",
  },
  label10: {
    width: 197,
    textAlign: "right",
    color: Color.gray10,
    left: 16,
    top: "50%",
    marginTop: -10,
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    alignItems: "center",
    position: "absolute",
  },
  labelTxt: {
    width: "100%",
  },
  label11: {
    fontFamily: FontFamily.h5Regular,
  },
  tableColumn1: {
    left: 149,
    height: 232,
    top: 10,
  },
  text: {
    fontFamily: FontFamily.h5Regular,
  },
  cnLi8: {
    fontStyle: "italic",
    fontFamily: FontFamily.iBMPlexSansItalic,
  },
  tableCell13: {
    marginLeft: -46,
    height: 40,
    left: "50%",
    marginTop: 62,
    top: "50%",
    backgroundColor: Color.white,
  },
  label17: {
    color: Color.white,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button: {
    top: 303,
    left: 265,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.red40,
    padding: Padding.p_5xs,
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  tableColumnParent: {
    height: "94.74%",
    bottom: "5.26%",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    overflow: "hidden",
  },
  groupView: {
    marginTop: 45,
  },
  instanceParent: {
    top: 181,
    left: 20,
    height: 657,
    position: "absolute",
  },
  mobileBiTp: {
    backgroundColor: Color.gray90,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MobileBiTp;
