{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"rect" : [ 34.0, 79.0, 898.0, 368.0 ],
		"bgcolor" : [ 0.168627450980392, 0.662745098039216, 0.172549019607843, 1.0 ],
		"editing_bgcolor" : [ 0.168627450980392, 0.662745098039216, 0.172549019607843, 1.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-15",
					"items" : [ "JuOb.wav", ",", "17-Grito#1.wav", ",", "fruitbite.ogg", ",", "Aaa.wav", ",", "Eee.wav", ",", "Hagh.wav", ",", "hggrrrrr.wav", ",", "nrr.wav", ",", "Hee.wav", ",", "Uhh.wav", ",", "sound-bottle1.wav", ",", "sound-bottle2.wav", ",", "sound-mouse_click1.wav", ",", "SonidoArdilla2.wav", ",", "Hgmm.wav" ],
					"margin" : 10,
					"maxclass" : "chooser",
					"numinlets" : 1,
					"numoutlets" : 6,
					"outlettype" : [ "int", "", "int", "", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 128.0, 508.0, 151.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 410.0, 175.0, 298.0, 87.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 316.5, 252.0, 45.0, 22.0 ],
					"presentation_rect" : [ 316.5, 252.0, 45.0, 22.0 ],
					"style" : "",
					"text" : "route k"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 166.5, 252.0, 45.0, 22.0 ],
					"presentation_rect" : [ 166.5, 252.0, 45.0, 22.0 ],
					"style" : "",
					"text" : "route k"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-89",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 38.0, 313.583343505859375, 65.0, 22.0 ],
					"presentation_rect" : [ 38.0, 313.583343505859375, 65.0, 22.0 ],
					"style" : "",
					"text" : "r #0-status"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-79",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
						"bgcolor" : [ 0.898039, 0.898039, 0.898039, 1 ],
						"editing_bgcolor" : [ 0.898039, 0.898039, 0.898039, 1 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 170.0, 108.0, 22.0 ],
									"presentation_rect" : [ 50.0, 170.0, 108.0, 22.0 ],
									"style" : "",
									"text" : "dict.unpack status:"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-25",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 170.0, 170.0, 98.0, 22.0 ],
									"presentation_rect" : [ 170.0, 170.0, 98.0, 22.0 ],
									"style" : "",
									"text" : "NPM install error"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-27",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 221.0, 86.0, 22.0 ],
									"presentation_rect" : [ 50.0, 221.0, 86.0, 22.0 ],
									"style" : "",
									"text" : "NPM install $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 50.0, 133.0, 83.0, 22.0 ],
									"presentation_rect" : [ 50.0, 133.0, 83.0, 22.0 ],
									"style" : "",
									"text" : "route success"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-52",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 50.0, 100.0, 63.0, 22.0 ],
									"presentation_rect" : [ 50.0, 100.0, 63.0, 22.0 ],
									"style" : "",
									"text" : "route npm"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-64",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ],
									"presentation_rect" : [ 50.0, 40.0, 30.0, 30.0 ],
									"style" : ""
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-68",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 104.0, 303.0, 30.0, 30.0 ],
									"presentation_rect" : [ 104.0, 303.0, 30.0, 30.0 ],
									"style" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-27", 0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-68", 0 ],
									"source" : [ "obj-25", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-68", 0 ],
									"source" : [ "obj-27", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-36", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"source" : [ "obj-36", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"source" : [ "obj-52", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-52", 0 ],
									"source" : [ "obj-64", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 38.0, 343.583343505859375, 42.0, 22.0 ],
					"presentation_rect" : [ 38.0, 343.583343505859375, 42.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"style" : "",
						"tags" : ""
					}
,
					"style" : "",
					"text" : "p npm"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 38.0, 378.583343505859375, 91.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 33.500007629394531, 142.0, 91.0, 22.0 ],
					"style" : "",
					"text" : "print @popup 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-114",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 59.0, 116.666664123535156, 98.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 33.500007629394531, 118.0, 98.0, 22.0 ],
					"style" : "",
					"text" : "script npm install"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"id" : "obj-112",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1244.2083740234375, 248.0, 117.708328247070312, 51.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 176.54168701171875, 118.0, 171.958328247070312, 37.0 ],
					"style" : "",
					"text" : "0. Install dependencies (one time)"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-110",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 670.0, 1005.0, 84.0, 35.0 ],
					"presentation_linecount" : 2,
					"presentation_rect" : [ 670.0, 1005.0, 84.0, 35.0 ],
					"style" : "",
					"text" : ";\rmax reveal $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-105",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 670.0, 946.0, 24.0, 24.0 ],
					"presentation_rect" : [ 670.0, 946.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-98",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 670.0, 978.0, 76.0, 22.0 ],
					"presentation_rect" : [ 670.0, 978.0, 76.0, 22.0 ],
					"style" : "",
					"text" : "zl.reg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 670.0, 914.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 717.5, 278.5, 41.0, 22.0 ],
					"style" : "",
					"text" : "reveal"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 12.0,
					"id" : "obj-85",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 956.0, 655.0, 99.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 714.0, 175.0, 99.0, 22.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 2,
							"parameter_longname" : "live.text",
							"parameter_mmax" : 1.0,
							"parameter_shortname" : "live.text",
							"parameter_enum" : [ "val1", "val2" ]
						}

					}
,
					"text" : "Autopreview Off",
					"texton" : "Autopreview On",
					"varname" : "live.text"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 359.0, 353.0, 73.0, 22.0 ],
					"presentation_rect" : [ 359.0, 353.0, 73.0, 22.0 ],
					"style" : "",
					"text" : "r #0-running"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-22",
					"ignoreclick" : 1,
					"maxclass" : "live.toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 359.0, 386.0, 28.0, 28.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 204.000015258789062, 184.0, 28.0, 28.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 2,
							"parameter_longname" : "live.toggle",
							"parameter_mmax" : 1.0,
							"parameter_shortname" : "live.toggle",
							"parameter_enum" : [ "off", "on" ]
						}

					}
,
					"varname" : "live.toggle"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-107",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1018.0, 372.0, 189.0, 74.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 14.5, 33.0, 422.0, 33.0 ],
					"style" : "",
					"text" : "freesound.org is an online repository of recorded sounds. This patch lets you search and download sounds from freesound without leaving your patch.",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 16.0,
					"id" : "obj-106",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1018.0, 338.0, 197.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 14.5, 10.0, 140.0, 24.0 ],
					"style" : "",
					"text" : "Freesound Search",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-104",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 265.0, 389.0, 86.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 110.000007629394531, 187.0, 86.0, 20.0 ],
					"style" : "",
					"text" : "Script running:",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-102",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 274.5, 1005.0, 79.0, 22.0 ],
					"presentation_rect" : [ 274.5, 1005.0, 79.0, 22.0 ],
					"style" : "",
					"text" : "loadmess set"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.741176470588235, 0.827450980392157, 0.03921568627451, 1.0 ],
					"id" : "obj-101",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 209.5, 1039.0, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 122.5, 306.0, 226.000015258789062, 20.0 ],
					"style" : "",
					"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-93",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 41.25, 1039.0, 156.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 28.500030517578125, 306.0, 79.0, 20.0 ],
					"style" : "",
					"text" : "Download to:",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-86",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 471.5, 43.0, 24.0, 24.0 ],
					"presentation_rect" : [ 471.5, 43.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-84",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 471.5, 10.0, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 714.0, 143.0, 45.0, 22.0 ],
					"style" : "",
					"text" : "search"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-77",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 685.0, 22.0, 129.0, 20.0 ],
					"presentation_rect" : [ 685.0, 22.0, 129.0, 20.0 ],
					"style" : "",
					"text" : "Set maximum duration",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 555.0, 381.0, 142.0, 22.0 ],
					"presentation_rect" : [ 555.0, 381.0, 142.0, 22.0 ],
					"style" : "",
					"text" : "Start the node script first!"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-51",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 555.0, 418.0, 91.0, 22.0 ],
					"presentation_rect" : [ 555.0, 418.0, 91.0, 22.0 ],
					"style" : "",
					"text" : "print @popup 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 681.0, 343.0, 52.0, 22.0 ],
					"presentation_rect" : [ 681.0, 343.0, 52.0, 22.0 ],
					"style" : "",
					"text" : "gate 2 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 534.0, 326.0, 29.5, 22.0 ],
					"presentation_rect" : [ 534.0, 326.0, 29.5, 22.0 ],
					"style" : "",
					"text" : "+ 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-44",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 290.0, 73.0, 22.0 ],
					"presentation_rect" : [ 534.0, 290.0, 73.0, 22.0 ],
					"style" : "",
					"text" : "r #0-running"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-43",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 304.0, 187.0, 75.0, 22.0 ],
					"presentation_rect" : [ 304.0, 187.0, 75.0, 22.0 ],
					"style" : "",
					"text" : "s #0-running"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-41",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 304.0, 142.0, 172.0, 22.0 ],
					"presentation_rect" : [ 304.0, 142.0, 172.0, 22.0 ],
					"style" : "",
					"text" : "getattr @attr running @listen 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-40",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 646.0, 632.0, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 154.0, 252.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 646.0, 675.0, 101.0, 22.0 ],
					"presentation_rect" : [ 646.0, 675.0, 101.0, 22.0 ],
					"style" : "",
					"text" : "opendialog folder"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "live.gain~",
					"numinlets" : 2,
					"numoutlets" : 5,
					"orientation" : 1,
					"outlettype" : [ "signal", "signal", "", "float", "list" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 824.0, 812.0, 136.0, 47.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 657.0, 306.0, 157.0, 47.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 0,
							"parameter_unitstyle" : 4,
							"parameter_mmin" : -70.0,
							"parameter_longname" : "gain",
							"parameter_mmax" : 6.0,
							"parameter_initial" : [ 0.0 ],
							"parameter_shortname" : "gain"
						}

					}
,
					"varname" : "gain"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 2,
					"id" : "obj-24",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1244.2083740234375, 355.083343505859375, 123.0, 52.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 410.0, 101.0, 152.0, 39.0 ],
					"style" : "",
					"text" : "2. Type text here to search"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 10.0, 79.0, 22.0 ],
					"presentation_rect" : [ 534.0, 10.0, 79.0, 22.0 ],
					"style" : "",
					"text" : "loadmess set"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"bubbleside" : 3,
					"id" : "obj-16",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 543.0, 518.0, 150.0, 24.0 ],
					"presentation" : 1,
					"presentation_linecount" : 3,
					"presentation_rect" : [ 70.0, 238.5, 80.0, 51.0 ],
					"style" : "",
					"text" : "Set download directory",
					"textcolor" : [ 0.160784006118774, 0.168626993894577, 0.180391997098923, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 59.0, 627.0, 60.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 766.0, 278.5, 60.0, 22.0 ],
					"style" : "",
					"text" : "download"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"id" : "obj-6",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1244.2083740234375, 306.083343505859375, 75.0, 37.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 244.500015258789062, 179.5, 104.0, 37.0 ],
					"style" : "",
					"text" : "1. Start the script"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-108",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 956.0, 720.0, 52.0, 22.0 ],
					"presentation_rect" : [ 956.0, 720.0, 52.0, 22.0 ],
					"style" : "",
					"text" : "gate 1 0"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.996078, 0.713725, 0.0, 1.0 ],
					"id" : "obj-100",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"rect" : [ 396.0, 438.0, 640.0, 480.0 ],
						"bgcolor" : [ 0.88, 0.88, 0.86, 1.0 ],
						"editing_bgcolor" : [ 0.88, 0.88, 0.86, 1.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 50.0, 58.0, 55.0, 22.0 ],
									"presentation_rect" : [ 50.0, 58.0, 55.0, 22.0 ],
									"style" : "",
									"text" : "zl.slice 1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-98",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 12.0, 109.0, 22.0 ],
									"presentation_rect" : [ 50.0, 12.0, 109.0, 22.0 ],
									"style" : "",
									"text" : "r #0-search-results"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-87",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 50.0, 208.0, 116.0, 22.0 ],
									"presentation_rect" : [ 50.0, 208.0, 116.0, 22.0 ],
									"style" : "",
									"text" : "routepass dictionary"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-11",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 316.0, 178.0, 89.0, 22.0 ],
									"presentation_rect" : [ 316.0, 178.0, 89.0, 22.0 ],
									"style" : "",
									"text" : "loadmess clear"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-46",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 382.5, 376.0, 96.0, 22.0 ],
									"presentation_rect" : [ 382.5, 376.0, 96.0, 22.0 ],
									"style" : "",
									"text" : "prepend append"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-45",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 213.0, 376.0, 96.0, 22.0 ],
									"presentation_rect" : [ 213.0, 376.0, 96.0, 22.0 ],
									"style" : "",
									"text" : "prepend append"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-44",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 382.5, 422.0, 85.0, 22.0 ],
									"presentation_rect" : [ 382.5, 422.0, 85.0, 22.0 ],
									"style" : "",
									"text" : "s #0-dl-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-43",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 213.0, 422.0, 117.0, 22.0 ],
									"presentation_rect" : [ 213.0, 422.0, 117.0, 22.0 ],
									"style" : "",
									"text" : "s #0-preview-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-41",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "" ],
									"patching_rect" : [ 213.0, 340.0, 211.0, 22.0 ],
									"presentation_rect" : [ 213.0, 340.0, 211.0, 22.0 ],
									"style" : "",
									"text" : "route preview-lq-mp3 preview-hq-mp3"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-40",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 213.0, 303.0, 47.0, 22.0 ],
									"presentation_rect" : [ 213.0, 303.0, 47.0, 22.0 ],
									"style" : "",
									"text" : "dict.iter"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-39",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 429.0, 106.0, 22.0 ],
									"presentation_rect" : [ 50.0, 429.0, 106.0, 22.0 ],
									"style" : "",
									"text" : "s #0-name-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 450.5, 242.0, 85.0, 22.0 ],
									"presentation_rect" : [ 450.5, 242.0, 85.0, 22.0 ],
									"style" : "",
									"text" : "s #0-dl-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-37",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 316.0, 242.0, 117.0, 22.0 ],
									"presentation_rect" : [ 316.0, 242.0, 117.0, 22.0 ],
									"style" : "",
									"text" : "s #0-preview-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-38",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 192.0, 242.0, 106.0, 22.0 ],
									"presentation_rect" : [ 192.0, 242.0, 106.0, 22.0 ],
									"style" : "",
									"text" : "s #0-name-umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-30",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 117.0, 242.0, 47.0, 22.0 ],
									"presentation_rect" : [ 117.0, 242.0, 47.0, 22.0 ],
									"style" : "",
									"text" : "zl.iter 1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-25",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "" ],
									"patching_rect" : [ 50.0, 310.0, 120.0, 22.0 ],
									"presentation_rect" : [ 50.0, 310.0, 120.0, 22.0 ],
									"style" : "",
									"text" : "route name previews"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-24",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 178.0, 103.0, 22.0 ],
									"presentation_rect" : [ 50.0, 178.0, 103.0, 22.0 ],
									"style" : "",
									"text" : "dict.unpack array:"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-18",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 342.0, 96.0, 22.0 ],
									"presentation_rect" : [ 50.0, 342.0, 96.0, 22.0 ],
									"style" : "",
									"text" : "prepend append"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-16",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 281.0, 47.0, 22.0 ],
									"presentation_rect" : [ 50.0, 281.0, 47.0, 22.0 ],
									"style" : "",
									"text" : "dict.iter"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 192.0, 178.0, 35.0, 22.0 ],
									"presentation_rect" : [ 192.0, 178.0, 35.0, 22.0 ],
									"style" : "",
									"text" : "clear"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"patching_rect" : [ 50.0, 146.0, 29.5, 22.0 ],
									"presentation_rect" : [ 50.0, 146.0, 29.5, 22.0 ],
									"style" : "",
									"text" : "t l b"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"order" : 0,
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-37", 0 ],
									"order" : 1,
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"order" : 2,
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-12", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"order" : 0,
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-37", 0 ],
									"order" : 1,
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"order" : 2,
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"source" : [ "obj-16", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-39", 0 ],
									"source" : [ "obj-18", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-87", 0 ],
									"source" : [ "obj-24", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-18", 0 ],
									"source" : [ "obj-25", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-40", 0 ],
									"source" : [ "obj-25", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-12", 0 ],
									"source" : [ "obj-3", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-30", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-41", 0 ],
									"source" : [ "obj-40", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-45", 0 ],
									"source" : [ "obj-41", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-46", 0 ],
									"source" : [ "obj-41", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-43", 0 ],
									"source" : [ "obj-45", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-44", 0 ],
									"source" : [ "obj-46", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-87", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-30", 0 ],
									"source" : [ "obj-87", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"source" : [ "obj-98", 0 ]
								}

							}
 ],
						"default_bgcolor" : [ 0.160784, 0.168627, 0.180392, 1.0 ],
						"color" : [ 1.0, 1.0, 0.0, 1.0 ],
						"locked_bgcolor" : [ 0.88, 0.88, 0.86, 1.0 ]
					}
,
					"patching_rect" : [ 128.0, 418.0, 89.0, 22.0 ],
					"presentation_rect" : [ 128.0, 418.0, 89.0, 22.0 ],
					"saved_object_attributes" : 					{
						"bgcolor" : [ 0.160784, 0.168627, 0.180392, 1.0 ],
						"color" : [ 1.0, 1.0, 0.0, 1.0 ],
						"description" : "",
						"digest" : "",
						"editing_bgcolor" : [ 0.88, 0.88, 0.86, 1.0 ],
						"globalpatchername" : "",
						"locked_bgcolor" : [ 0.88, 0.88, 0.86, 1.0 ],
						"style" : "",
						"tags" : ""
					}
,
					"style" : "",
					"text" : "p menu-builder",
					"varname" : "boop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-94",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 38.0, 282.0, 111.0, 22.0 ],
					"presentation_rect" : [ 38.0, 282.0, 111.0, 22.0 ],
					"style" : "",
					"text" : "s #0-search-results"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-90",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 551.5, 101.0, 24.0, 24.0 ],
					"presentation_rect" : [ 551.5, 101.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 685.0, 167.0, 45.0, 22.0 ],
					"presentation_rect" : [ 685.0, 167.0, 45.0, 22.0 ],
					"style" : "",
					"text" : "/ 1000."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-74",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 714.0, 381.0, 71.0, 22.0 ],
					"presentation_rect" : [ 714.0, 381.0, 71.0, 22.0 ],
					"style" : "",
					"text" : "s #0-fsnode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-73",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 242.0, 92.0, 22.0 ],
					"presentation_rect" : [ 534.0, 242.0, 92.0, 22.0 ],
					"style" : "",
					"text" : "prepend search"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-70",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 205.0, 50.0, 22.0 ],
					"presentation_rect" : [ 534.0, 205.0, 50.0, 22.0 ],
					"style" : "",
					"text" : "pack s f"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 167.0, 138.0, 22.0 ],
					"presentation_rect" : [ 534.0, 167.0, 138.0, 22.0 ],
					"style" : "",
					"text" : "tosymbol @separator \" \""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-65",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 534.0, 134.0, 59.0, 22.0 ],
					"presentation_rect" : [ 534.0, 134.0, 59.0, 22.0 ],
					"style" : "",
					"text" : "route text"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "live.slider",
					"numinlets" : 1,
					"numoutlets" : 2,
					"orientation" : 1,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 685.0, 51.0, 111.0, 41.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 771.0, 133.5, 111.0, 41.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 0,
							"parameter_unitstyle" : 2,
							"parameter_mmin" : 0.2,
							"parameter_exponent" : 4.0,
							"parameter_longname" : "duration",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 5000.0,
							"parameter_initial" : [ 350 ],
							"parameter_shortname" : "duration"
						}

					}
,
					"varname" : "duration"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"keymode" : 1,
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 534.0, 42.0, 100.0, 50.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 410.0, 143.0, 298.0, 22.0 ],
					"style" : "",
					"text" : "scream"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 826.5, 33.0, 65.0, 22.0 ],
					"presentation_rect" : [ 826.5, 33.0, 65.0, 22.0 ],
					"style" : "",
					"text" : "r #0-status"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 304.0, 220.0, 67.0, 22.0 ],
					"presentation_rect" : [ 304.0, 220.0, 67.0, 22.0 ],
					"style" : "",
					"text" : "s #0-status"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-99",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 423.5, 937.0, 24.0, 24.0 ],
					"presentation_rect" : [ 423.5, 937.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-97",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 423.5, 909.0, 139.0, 22.0 ],
					"presentation_rect" : [ 423.5, 909.0, 139.0, 22.0 ],
					"style" : "",
					"text" : "r #0-update-downloaded"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-96",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 364.5, 312.5, 141.0, 22.0 ],
					"presentation_rect" : [ 364.5, 312.5, 141.0, 22.0 ],
					"style" : "",
					"text" : "s #0-update-downloaded"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-95",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 423.5, 971.0, 174.0, 22.0 ],
					"presentation_rect" : [ 423.5, 971.0, 174.0, 22.0 ],
					"style" : "",
					"text" : "autopopulate 0, autopopulate 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-91",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 311.5, 914.0, 85.0, 22.0 ],
					"presentation_rect" : [ 311.5, 914.0, 85.0, 22.0 ],
					"style" : "",
					"text" : "prepend prefix"
				}

			}
, 			{
				"box" : 				{
					"autopopulate" : 1,
					"id" : "obj-88",
					"items" : [ "BigPoopyTool", ",", "deviancy", ",", "deviancy.zip", ",", "faust-vsc", ",", "faust-vsc.vsix", ",", "feeling_blue.maxpat", ",", "freesound_dls", ",", "gen_dsp", ",", "gen_exported.cpp", ",", "gen_exported.h", ",", "Granulator II.amxd.zip", ",", "hashtable-notes.md", ",", "IMG_2434.MOV-1.mov", ",", "LiveLaunch.trace", ",", "LiveLaunch.trace.zip", ",", "log.txt", ",", "log2.txt", ",", "log3.txt", ",", "nodetest", ",", "polytest", ",", "polytest.zip", ",", "Rec-18.06.29-12h03m54s.aif", ",", "Screen Shot 2018-06-13 at 5.07.16 PM.png", ",", "Screen Shot 2018-06-13 at 5.07.57 PM.png", ",", "Screen Shot 2018-06-21 at 3.00.37 PM.png", ",", "Screen Shot 2018-06-21 at 3.00.51 PM.png", ",", "Screen Shot 2018-06-21 at 3.01.57 PM.png", ",", "Screen Shot 2018-06-25 at 10.24.35 AM.png", ",", "Screen Shot 2018-06-25 at 10.27.43 AM.png", ",", "Screen Shot 2018-06-25 at 10.27.45 AM.png", ",", "Screen Shot 2018-06-27 at 9.29.44 AM.png", ",", "Screen Shot 2018-06-27 at 9.30.03 AM.png", ",", "snd.aif", ",", "stuff", ",", "test.maxpat", ",", "timing-tests" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 311.5, 950.0, 100.0, 22.0 ],
					"prefix" : "Macintosh HD:/Users/starakaj/Desktop/",
					"presentation_rect" : [ 311.5, 950.0, 100.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-83",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 91.0, 805.0, 53.0, 22.0 ],
					"presentation_rect" : [ 91.0, 805.0, 53.0, 22.0 ],
					"style" : "",
					"text" : "pack s s"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-82",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 91.0, 758.0, 56.5, 22.0 ],
					"presentation_rect" : [ 91.0, 758.0, 56.5, 22.0 ],
					"style" : "",
					"text" : "zl.reg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-81",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "int" ],
					"patching_rect" : [ 209.5, 850.0, 137.0, 22.0 ],
					"presentation_rect" : [ 209.5, 850.0, 137.0, 22.0 ],
					"style" : "",
					"text" : "conformpath native boot"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-78",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 661.0, 28.0, 28.0 ],
					"presentation_rect" : [ 91.0, 661.0, 28.0, 28.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-76",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 154.0, 758.0, 38.0, 22.0 ],
					"presentation_rect" : [ 154.0, 758.0, 38.0, 22.0 ],
					"style" : "",
					"text" : "zl.reg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-75",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 990.0, 71.0, 22.0 ],
					"presentation_rect" : [ 91.0, 990.0, 71.0, 22.0 ],
					"style" : "",
					"text" : "s #0-fsnode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-72",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 209.5, 914.0, 72.0, 22.0 ],
					"presentation_rect" : [ 209.5, 914.0, 72.0, 22.0 ],
					"style" : "",
					"text" : "prepend set"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-71",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 91.0, 950.0, 49.0, 22.0 ],
					"presentation_rect" : [ 91.0, 950.0, 49.0, 22.0 ],
					"style" : "",
					"text" : "append"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-69",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 316.5, 278.5, 115.0, 22.0 ],
					"presentation_rect" : [ 316.5, 278.5, 115.0, 22.0 ],
					"style" : "",
					"text" : "route start complete"
				}

			}
, 			{
				"box" : 				{
					"border" : 5.0,
					"bordercolor" : [ 0.741176470588235, 0.827450980392157, 0.03921568627451, 1.0 ],
					"id" : "obj-59",
					"maxclass" : "dropfile",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 543.0, 581.0, 155.0, 37.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 193.500015258789062, 244.5, 155.0, 37.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-54",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 91.0, 914.0, 117.0, 22.0 ],
					"presentation_rect" : [ 91.0, 914.0, 117.0, 22.0 ],
					"style" : "",
					"text" : "prepend download k"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-50",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 919.0, 832.0, 56.0, 22.0 ],
					"presentation_rect" : [ 919.0, 832.0, 56.0, 22.0 ],
					"sig" : 0.0,
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-49",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 824.0, 962.0, 45.0, 45.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 836.5, 278.5, 45.0, 45.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 824.0, 731.0, 41.0, 22.0 ],
					"presentation_rect" : [ 824.0, 731.0, 41.0, 22.0 ],
					"style" : "",
					"text" : "sig~ 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 879.0, 731.0, 29.5, 22.0 ],
					"presentation_rect" : [ 879.0, 731.0, 29.5, 22.0 ],
					"style" : "",
					"text" : "0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 824.0, 686.0, 29.5, 22.0 ],
					"presentation_rect" : [ 824.0, 686.0, 29.5, 22.0 ],
					"style" : "",
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1067.5, 595.0, 95.0, 22.0 ],
					"presentation_rect" : [ 1067.5, 595.0, 95.0, 22.0 ],
					"style" : "",
					"text" : "prepend replace"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1067.5, 567.0, 29.5, 22.0 ],
					"presentation_rect" : [ 1067.5, 567.0, 29.5, 22.0 ],
					"style" : "",
					"text" : "$2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1067.5, 540.0, 115.0, 22.0 ],
					"presentation_rect" : [ 1067.5, 540.0, 115.0, 22.0 ],
					"style" : "",
					"text" : "r #0-update-preview"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 214.5, 316.0, 117.0, 22.0 ],
					"presentation_rect" : [ 214.5, 316.0, 117.0, 22.0 ],
					"style" : "",
					"text" : "s #0-update-preview"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 166.5, 282.0, 115.0, 22.0 ],
					"presentation_rect" : [ 166.5, 282.0, 115.0, 22.0 ],
					"style" : "",
					"text" : "route start complete"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 122.5, 220.0, 135.0, 22.0 ],
					"presentation_rect" : [ 122.5, 220.0, 135.0, 22.0 ],
					"style" : "",
					"text" : "route preview download"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 291.5, 661.0, 71.0, 22.0 ],
					"presentation_rect" : [ 291.5, 661.0, 71.0, 22.0 ],
					"style" : "",
					"text" : "s #0-fsnode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 291.5, 627.0, 107.0, 22.0 ],
					"presentation_rect" : [ 291.5, 627.0, 107.0, 22.0 ],
					"style" : "",
					"text" : "prepend preview k"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 38.0, 220.0, 75.0, 22.0 ],
					"presentation_rect" : [ 38.0, 220.0, 75.0, 22.0 ],
					"style" : "",
					"text" : "route search"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-63",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1007.0, 894.0, 44.0, 22.0 ],
					"presentation_rect" : [ 1007.0, 894.0, 44.0, 22.0 ],
					"style" : "",
					"text" : "line $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-61",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 1007.0, 858.0, 101.5, 22.0 ],
					"presentation_rect" : [ 1007.0, 858.0, 101.5, 22.0 ],
					"style" : "",
					"text" : "* 0."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 1007.0, 828.0, 81.0, 22.0 ],
					"presentation_rect" : [ 1007.0, 828.0, 81.0, 22.0 ],
					"style" : "",
					"text" : "snapshot~ 33"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "float", "list", "float", "float", "float", "float", "float", "", "int" ],
					"patching_rect" : [ 1097.5, 804.0, 103.0, 22.0 ],
					"presentation_rect" : [ 1097.5, 804.0, 103.0, 22.0 ],
					"style" : "",
					"text" : "info~ #0-preview"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 824.0, 778.0, 114.0, 22.0 ],
					"presentation_rect" : [ 824.0, 778.0, 114.0, 22.0 ],
					"saved_object_attributes" : 					{
						"basictuning" : 440,
						"followglobaltempo" : 0,
						"formantcorrection" : 0,
						"loopend" : [ 0.0, "ms" ],
						"loopstart" : [ 0.0, "ms" ],
						"mode" : "basic",
						"originallength" : [ 0.0, "ticks" ],
						"originaltempo" : 120.0,
						"phase" : [ 0.0, "ticks" ],
						"pitchcorrection" : 0,
						"quality" : "basic",
						"timestretch" : [ 0 ]
					}
,
					"style" : "",
					"text" : "groove~ #0-preview"
				}

			}
, 			{
				"box" : 				{
					"buffername" : "#0-preview",
					"id" : "obj-56",
					"maxclass" : "waveform~",
					"numinlets" : 5,
					"numoutlets" : 6,
					"outlettype" : [ "float", "float", "float", "float", "list", "" ],
					"patching_rect" : [ 912.0, 931.0, 256.0, 64.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 410.0, 278.5, 235.0, 74.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"patching_rect" : [ 1067.5, 630.0, 108.0, 22.0 ],
					"presentation_rect" : [ 1067.5, 630.0, 108.0, 22.0 ],
					"style" : "",
					"text" : "buffer~ #0-preview"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 824.0, 655.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 657.0, 278.5, 50.0, 22.0 ],
					"style" : "",
					"text" : "preview"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 150.0, 142.0, 69.0, 22.0 ],
					"presentation_rect" : [ 150.0, 142.0, 69.0, 22.0 ],
					"style" : "",
					"text" : "r #0-fsnode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"items" : [ "http://freesound.org/data/previews/0/77_23-hq.mp3", ",", "http://freesound.org/data/previews/430/430608_8355747-hq.mp3", ",", "http://freesound.org/data/previews/348/348271_6148760-hq.mp3", ",", "http://freesound.org/data/previews/209/209165_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209166_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209171_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209173_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209174_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209177_2583849-hq.mp3", ",", "http://freesound.org/data/previews/209/209180_2583849-hq.mp3", ",", "http://freesound.org/data/previews/18/18033_30267-hq.mp3", ",", "http://freesound.org/data/previews/18/18034_30267-hq.mp3", ",", "http://freesound.org/data/previews/18/18035_30267-hq.mp3", ",", "http://freesound.org/data/previews/392/392513_7301889-hq.mp3", ",", "http://freesound.org/data/previews/209/209176_2583849-hq.mp3" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 423.5, 596.0, 100.0, 22.0 ],
					"presentation_rect" : [ 423.5, 596.0, 100.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 423.5, 518.0, 83.0, 22.0 ],
					"presentation_rect" : [ 423.5, 518.0, 83.0, 22.0 ],
					"style" : "",
					"text" : "r #0-dl-umenu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-33",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 251.0, 457.0, 115.0, 22.0 ],
					"presentation_rect" : [ 251.0, 457.0, 115.0, 22.0 ],
					"style" : "",
					"text" : "r #0-preview-umenu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-32",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 128.0, 457.0, 104.0, 22.0 ],
					"presentation_rect" : [ 128.0, 457.0, 104.0, 22.0 ],
					"style" : "",
					"text" : "r #0-name-umenu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-31",
					"items" : [ "http://freesound.org/data/previews/0/77_23-lq.mp3", ",", "http://freesound.org/data/previews/430/430608_8355747-lq.mp3", ",", "http://freesound.org/data/previews/348/348271_6148760-lq.mp3", ",", "http://freesound.org/data/previews/209/209165_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209166_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209171_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209173_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209174_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209177_2583849-lq.mp3", ",", "http://freesound.org/data/previews/209/209180_2583849-lq.mp3", ",", "http://freesound.org/data/previews/18/18033_30267-lq.mp3", ",", "http://freesound.org/data/previews/18/18034_30267-lq.mp3", ",", "http://freesound.org/data/previews/18/18035_30267-lq.mp3", ",", "http://freesound.org/data/previews/392/392513_7301889-lq.mp3", ",", "http://freesound.org/data/previews/209/209176_2583849-lq.mp3" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 596.0, 100.0, 22.0 ],
					"presentation_rect" : [ 251.0, 596.0, 100.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-4",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "n4m.monitor.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 826.5, 63.0, 400.0, 220.0 ],
					"presentation_rect" : [ 826.5, 63.0, 400.0, 220.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 38.0, 87.833335876464844, 64.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 33.500007629394531, 187.0, 64.0, 22.0 ],
					"style" : "",
					"text" : "script start"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 38.0, 187.0, 181.0, 22.0 ],
					"presentation_rect" : [ 38.0, 187.0, 181.0, 22.0 ],
					"saved_object_attributes" : 					{
						"autostart" : 0,
						"defer" : 0,
						"node" : "",
						"npm" : "",
						"watch" : 1
					}
,
					"style" : "",
					"text" : "node.script fs-index.js @watch 1"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"id" : "obj-87",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 710.0, 581.0, 151.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 223.500030517578125, 253.0, 95.0, 20.0 ],
					"style" : "",
					"text" : "Drop folder here",
					"textcolor" : [ 0.996078431606293, 0.996078431606293, 0.996078431606293, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0.160784, 0.168627, 0.180392, 1.0 ],
					"id" : "obj-111",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1227.0, 812.0, 128.0, 128.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 1501.5833740234375, 82.0 ],
					"proportion" : 0.5,
					"rounded" : 0,
					"style" : ""
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"order" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-10", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-101", 0 ],
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-98", 0 ],
					"source" : [ "obj-105", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-108", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-69", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"order" : 1,
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"order" : 0,
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 1 ],
					"source" : [ "obj-15", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-65", 0 ],
					"order" : 1,
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-90", 0 ],
					"order" : 0,
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"order" : 0,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"order" : 1,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 1 ],
					"source" : [ "obj-30", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-31", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-76", 1 ],
					"midpoints" : [ 473.5, 734.5, 182.5, 734.5 ],
					"source" : [ "obj-35", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"midpoints" : [ 655.5, 830.0, 219.0, 830.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-41", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"source" : [ "obj-41", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-74", 0 ],
					"source" : [ "obj-46", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-71", 0 ],
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-108", 1 ],
					"order" : 1,
					"source" : [ "obj-55", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"order" : 0,
					"source" : [ "obj-55", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 1 ],
					"order" : 0,
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"order" : 1,
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"order" : 1,
					"source" : [ "obj-57", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"order" : 0,
					"source" : [ "obj-57", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 1 ],
					"source" : [ "obj-58", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"midpoints" : [ 552.5, 814.0, 219.0, 814.0 ],
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"source" : [ "obj-65", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 0 ],
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-96", 0 ],
					"source" : [ "obj-69", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"source" : [ "obj-70", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"source" : [ "obj-71", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-101", 0 ],
					"order" : 0,
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-71", 0 ],
					"order" : 1,
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 1 ],
					"midpoints" : [ 543.5, 280.0, 723.5, 280.0 ],
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-83", 1 ],
					"source" : [ "obj-76", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-76", 0 ],
					"order" : 0,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"order" : 1,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"source" : [ "obj-79", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 1 ],
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"order" : 2,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-91", 0 ],
					"order" : 1,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-98", 1 ],
					"midpoints" : [ 219.0, 890.5, 736.5, 890.5 ],
					"order" : 0,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-83", 0 ],
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"source" : [ "obj-84", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-108", 0 ],
					"source" : [ "obj-85", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-86", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"source" : [ "obj-89", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-9", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-88", 0 ],
					"source" : [ "obj-91", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-105", 0 ],
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-88", 0 ],
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-99", 0 ],
					"source" : [ "obj-97", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-110", 0 ],
					"source" : [ "obj-98", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"source" : [ "obj-99", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-22" : [ "live.toggle", "live.toggle", 0 ],
			"obj-30" : [ "gain", "gain", 0 ],
			"obj-85" : [ "live.text", "live.text", 0 ],
			"obj-29" : [ "duration", "duration", 0 ],
			"parameterbanks" : 			{

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "n4m.monitor.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/Node For Max/patchers/debug-monitor",
				"patcherrelativepath" : "../../../Documents/Max 8/Packages/Node For Max/patchers/debug-monitor",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "resize_n4m_monitor_patcher.js",
				"bootpath" : "~/Documents/Max 8/Packages/Node For Max/patchers/debug-monitor",
				"patcherrelativepath" : "../../../Documents/Max 8/Packages/Node For Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "light",
				"default" : 				{
					"fontsize" : [ 32.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgfillcolor" : 					{
						"type" : "color",
						"color1" : [ 1.0, 1.0, 1.0, 1.0 ],
						"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"color" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0.0
					}

				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ],
		"locked_bgcolor" : [ 0.168627450980392, 0.662745098039216, 0.172549019607843, 1.0 ]
	}

}
