"use strict";
exports.__esModule = true;
var MEDIA_JOB_PARAMS = function (videoId, lectureId, actionType) {
    if (actionType === void 0) { actionType = "complete"; }
    return ({
        Queue: process.env.AWS_MEDIA_CONVERT_QUEUE,
        UserMetadata: {
            lectureId: lectureId,
            videoId: videoId,
            actionType: actionType
        },
        Role: process.env.AWS_MEDIA_CONVERT_ROLE,
        Settings: {
            TimecodeConfig: {
                Source: 'ZEROBASED'
            },
            OutputGroups: [
                {
                    Name: 'Apple HLS',
                    Outputs: [
                        {
                            ContainerSettings: {
                                Container: 'M3U8',
                                M3u8Settings: {
                                    AudioFramesPerPes: 4,
                                    PcrControl: 'PCR_EVERY_PES_PACKET',
                                    PmtPid: 480,
                                    PrivateMetadataPid: 503,
                                    ProgramNumber: 1,
                                    PatInterval: 0,
                                    PmtInterval: 0,
                                    Scte35Source: 'NONE',
                                    NielsenId3: 'NONE',
                                    TimedMetadata: 'NONE',
                                    VideoPid: 481,
                                    AudioPids: [
                                        482,
                                        483,
                                        484,
                                        485,
                                        486,
                                        487,
                                        488,
                                        489,
                                        490,
                                        491,
                                        492,
                                    ]
                                }
                            },
                            VideoDescription: {
                                ScalingBehavior: 'DEFAULT',
                                TimecodeInsertion: 'DISABLED',
                                AntiAlias: 'ENABLED',
                                Sharpness: 50,
                                CodecSettings: {
                                    Codec: 'H_264',
                                    H264Settings: {
                                        InterlaceMode: 'PROGRESSIVE',
                                        NumberReferenceFrames: 3,
                                        Syntax: 'DEFAULT',
                                        Softness: 0,
                                        GopClosedCadence: 1,
                                        GopSize: 90,
                                        Slices: 1,
                                        GopBReference: 'DISABLED',
                                        // MaxBitrate: 500000,
                                        MaxBitrate: 500000,
                                        // 6000000 1080 p
                                        // 4000000 720 p
                                        SlowPal: 'DISABLED',
                                        EntropyEncoding: 'CABAC',
                                        FramerateControl: 'INITIALIZE_FROM_SOURCE',
                                        RateControlMode: 'QVBR',
                                        QvbrSettings: {
                                            QvbrQualityLevel: 7,
                                            QvbrQualityLevelFineTune: 0
                                        },
                                        CodecProfile: 'MAIN',
                                        Telecine: 'NONE',
                                        MinIInterval: 0,
                                        AdaptiveQuantization: 'AUTO',
                                        CodecLevel: 'AUTO',
                                        FieldEncoding: 'PAFF',
                                        SceneChangeDetect: 'ENABLED',
                                        QualityTuningLevel: 'SINGLE_PASS',
                                        FramerateConversionAlgorithm: 'DUPLICATE_DROP',
                                        UnregisteredSeiTimecode: 'DISABLED',
                                        GopSizeUnits: 'FRAMES',
                                        ParControl: 'INITIALIZE_FROM_SOURCE',
                                        NumberBFramesBetweenReferenceFrames: 2,
                                        RepeatPps: 'DISABLED',
                                        DynamicSubGop: 'STATIC'
                                    }
                                },
                                AfdSignaling: 'NONE',
                                DropFrameTimecode: 'ENABLED',
                                RespondToAfd: 'NONE',
                                ColorMetadata: 'INSERT'
                            },
                            AudioDescriptions: [
                                {
                                    AudioTypeControl: 'FOLLOW_INPUT',
                                    CodecSettings: {
                                        Codec: 'AAC',
                                        AacSettings: {
                                            AudioDescriptionBroadcasterMix: 'NORMAL',
                                            Bitrate: 96000,
                                            RateControlMode: 'CBR',
                                            CodecProfile: 'LC',
                                            CodingMode: 'CODING_MODE_2_0',
                                            RawFormat: 'NONE',
                                            SampleRate: 48000,
                                            Specification: 'MPEG4'
                                        }
                                    },
                                    LanguageCodeControl: 'FOLLOW_INPUT'
                                },
                            ],
                            OutputSettings: {
                                HlsSettings: {
                                    AudioGroupId: 'program_audio',
                                    AudioOnlyContainer: 'AUTOMATIC',
                                    IFrameOnlyManifest: 'EXCLUDE'
                                }
                            },
                            NameModifier: "".concat(videoId)
                        },
                    ],
                    OutputGroupSettings: {
                        Type: 'HLS_GROUP_SETTINGS',
                        HlsGroupSettings: {
                            ManifestDurationFormat: 'INTEGER',
                            SegmentLength: 10,
                            TimedMetadataId3Period: 10,
                            CaptionLanguageSetting: 'OMIT',
                            // Destination: `s3://${process.env.AWS_STREAMS_BUCKET}/${videoId}-1080/`,
                            Destination: "s3://".concat(process.env.AWS_STREAMS_BUCKET, "/").concat(videoId, "/"),
                            TimedMetadataId3Frame: 'PRIV',
                            CodecSpecification: 'RFC_4281',
                            OutputSelection: 'MANIFESTS_AND_SEGMENTS',
                            ProgramDateTimePeriod: 600,
                            MinSegmentLength: 0,
                            MinFinalSegmentLength: 0,
                            DirectoryStructure: 'SINGLE_DIRECTORY',
                            ProgramDateTime: 'EXCLUDE',
                            SegmentControl: 'SEGMENTED_FILES',
                            ManifestCompression: 'NONE',
                            ClientCache: 'ENABLED',
                            AudioOnlyHeader: 'INCLUDE',
                            StreamInfResolution: 'INCLUDE'
                        }
                    }
                },
            ],
            AdAvailOffset: 0,
            Inputs: [
                {
                    AudioSelectors: {
                        'Audio Selector 1': {
                            Offset: 0,
                            DefaultSelection: 'DEFAULT',
                            ProgramSelection: 1
                        }
                    },
                    VideoSelector: {
                        ColorSpace: 'FOLLOW',
                        Rotate: 'AUTO',
                        AlphaBehavior: 'DISCARD'
                    },
                    FilterEnable: 'AUTO',
                    PsiControl: 'USE_PSI',
                    FilterStrength: 0,
                    DeblockFilter: 'DISABLED',
                    DenoiseFilter: 'DISABLED',
                    InputScanType: 'AUTO',
                    TimecodeSource: 'ZEROBASED',
                    FileInput: "s3://".concat(process.env.AWS_LECTURES_BUCKET, "/").concat(videoId, ".mp4")
                },
            ]
        },
        AccelerationSettings: {
            Mode: 'DISABLED'
        },
        StatusUpdateInterval: 'SECONDS_60',
        Priority: 0
    });
};
exports["default"] = MEDIA_JOB_PARAMS;
